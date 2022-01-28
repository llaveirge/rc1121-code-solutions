select "films"."releaseYear",
       "genres"."name" as "genre"
  from "films"
  join "filmGenre" using ("filmId")
  Join "genres" using ("genreId")
  where "films"."title" = 'Boogie Amelie';
