select "genres"."name" as "genre",
      count("filmGenre"."filmId") as "numberOfFilms"
  from "filmGenre"
    join "genres" using ("genreId")
    join "castMembers" using ("filmId")
    join "actors" using ("actorId")
      where "firstName" = 'Lisa'
        and "lastName" = 'Monroe'
  group by "genre";
