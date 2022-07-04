using peliculasApi.DTOs;

namespace peliculasApi.Utilidades
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Paginar<T>(this IQueryable<T> queryable, PaginacionDTO paginacionDTO)
        {
            // var query = queryable.Skip(10);
            // query = query.Take(paginacionDTO.RecordsPorPagina);

            // return query;


            return queryable.Skip((paginacionDTO.Pagina - 1) * paginacionDTO.RecordsPorPagina).Take(paginacionDTO.RecordsPorPagina);
        }
        
    }
}