using System.Text.Json.Serialization;
using AutoMapper;
using EntityFrameworkCore.UseRowNumberForPaging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using peliculasApi.Filtros;
using peliculasApi.Utilidades;
using peliculasAPI.ApiBehavior;

namespace peliculasAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(typeof(Startup));

            services.AddSingleton(provider => new MapperConfiguration(config =>
            {
                var geometryFactory = provider.GetRequiredService<GeometryFactory>();
                config.AddProfile(new AutoMapperProfiles(geometryFactory));
            }).CreateMapper());

            services.AddSingleton<GeometryFactory>(NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326));


            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
            services.AddResponseCaching();

            // services.AddTransient<IAlmacenadorArchivos, AlmacenadorAzureStorage>();
            services.AddTransient<IAlmacenadorArchivos, AlmacenadorArchivosLocal>();

            services.AddHttpContextAccessor();


            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("defaultConnection"),
            sqlServer => sqlServer.UseNetTopologySuite()
            ));


            services.AddCors(options =>
            {
                var frontendURL = Configuration.GetValue<string>("frontend_url");
                options.AddDefaultPolicy(builder =>
                        {
                            builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader()
                                .WithExposedHeaders(new string[] { "cantidadTotalRegistros" });
                        });
            });

            services.AddControllers(options =>
            {
                options.Filters.Add(typeof(ParsearBadRequest));
            }).ConfigureApiBehaviorOptions(BehaviorBadRequests.Parsear).AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);


            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Configure the HTTP request pipeline.
            if (env.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors();

            app.UseResponseCaching();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}