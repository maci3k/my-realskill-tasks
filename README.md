# PostgreSQL basic operations

This task will check your knowledge of basic operations you can do in Postgres database.

## Goals

First create `workers` table with automatically generated id (1,2,3) with following structure (`solution/schema.sql`):

| column   | type         |
|:--------:|:------------:|
|id        | (PRIMARY KEY)|
|name      | TEXT         |
|surname   | TEXT         |
|birthyear | INTEGER      |
|salary    | FLOAT        |
|retired   | BOOL         |

Then insert into `workers` table this data (`solution/insert.sql`):

| id | name  | surname | birthyear  | salary  | retired |
|----|-------|---------|------------|---------|---------|
|  1 | John  | Smith   | 1960       | 2400.00 | false   |
|  2 | Maria | Cook    | 1974       | 2370.00 | false   |
|  3 | Max   | Clark   | 1943       | 2945.34 | false   |

Execute query which will show **name** and **surname** of every **retired** `worker` (`solution/show_retired.sql`).

Raise the **salary** by **10%** to all `workers` younger than **50 years old** in 2016 (`solution/raise_salary.sql`).

Make every `worker` which is older than **65 years old** in 2016 retired and set their **salary** to 0 (`solution/make_retired.sql`).

## Setup

### To install dependencies 

```
npm install
```

## PgSQL test runner

### Database connection

You are required to provide valid connection to working PostgreSQL instance. This scaffolding is tested on PostgreSQL 9.4, however it should work on other 
database versions. 
If you just installed fresh version of PostgreSQL server don't forget to enable listening, setting `listen_address = 'localhost'` in PostgreSQL configuration
 file (on most *nix system it's located at `/etc/postgresql/9.4/main/postgresql.conf`). You may also have to adjust Host Based Authentication Policy that is 
 described in `pg_hba.conf` file (recommended authentication method is MD5).
 
## User, database and schema

### Configuration on *nix systems

You can manually prepare database connection or use command below that will create user, database, and set appropriate ownerships.
*Command below must be run from postgres system user* (switch to root user then switch to postgres by `su postgres`). When prompted for password, enter
 password `realskill`.
```  
createuser realskill -P && createdb realskill -O realskill && psql -d realskill -c 'ALTER SCHEMA public OWNER TO realskill;'
```

### Configuration on Windows systems

#### Using GUI tools
Use pgadmin to set following configuration:
```
user: realskill
password: realskill
database: realskill
schema: public
```
Database and schema owner must be set to `realskill` user.

#### Using command line

Open Windows Command Prompt as administrator ([see help](https://technet.microsoft.com/en-us/library/cc947813.aspx)).

Create user `realskill` with `realskill` password.

```
createuser -P -U postgres -W realskill
```

You will be prompted for new user password twice, then postgres superuser password (default is **postgres**).

Create database `realskill` and set ownership to user `realskill` (you will be prompted for **postgres** password).

```
createdb -O realskill -U postgres -W realskill
```

Change schema public (of realskill database) ownership to user `realskill` (you will be prompted for **postgres** password).

```
psql -d realskill -U postgres -W -c "ALTER SCHEMA public OWNER TO realskill;"
```

### Alternative configuration

All you need is to install `docker` and `docker-compose`

* [docker](https://docs.docker.com/engine/installation/)
* [docker-compose](https://docs.docker.com/compose/install/)

Then you can prepare environment for task on each system and not worry about configuration thanks to command:
    
    docker-compose up

Don't forget to turn off PostgreSQL if you have it already installed. 

### Run tests

    grunt test

Good luck!