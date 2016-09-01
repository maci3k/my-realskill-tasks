--statement
DROP TABLE IF EXISTS workers;

--statement="../solution/schema.sql" Seed schema

--statement="../solution/insert.sql" Insert some data

--statement="statements/select_all_workers.sql" Show all workers
--expect="expectations/expected_insert.csv" 3 workers

--statement="statements/insert_data.sql" Insert more data
--statement="../solution/show_retired.sql" Show retired workers
--expect="expectations/expected_retired.csv" retired workers

--statement="../solution/raise_salary.sql" Raise salary
--statement="statements/select_all_workers.sql" Show all workers
--expect="expectations/expected_raise.csv" workers with updated salary

--statement="../solution/make_retired.sql" Make retired
--statement="statements/select_all_workers.sql" Show all workers
--expect="expectations/expected_made_retired.csv" workers older than 65 years old in 2016 made retired