using System.ComponentModel.DataAnnotations;
using NetTopologySuite.Geometries;

namespace peliculasApi.Entidades
{
    public class Cine
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 75)]
        public string Nombre { get; set; }
        public Point Ubicacion { get; set; }
        public PeliculasCines PeliculasCines { get; set; }
    }
}