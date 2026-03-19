/*

-----------------------------
--TABLE :  public.admin
-----------------------------

CREATE TABLE admin (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(50) NOT NULL,
    pseudo VARCHAR(100) NOT NULL,
    role TEXT,
    date_inscripton TIMESTAMP 
);

-----------------------------
--TABLE :  public.users
-----------------------------

CREATE TABLE users (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pseudo VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    date_modification TIMESTAMP,
    date_inscripton TIMESTAMP
);

-----------------------------
--TABLE :  public.discussion
-----------------------------

CREATE TABLE discussion (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    role TEXT,
    publiee TIMESTAMP,
    date_creation TIMESTAMP,
    date_modification TIMESTAMP
);

-----------------------------
--TABLE :  public.events
-----------------------------

CREATE TABLE events (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP,
    date_modification TIMESTAMP 
);

-----------------------------
--TABLE :  public.login
-----------------------------

CREATE TABLE login (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    pseudo VARCHAR (100) NOT NULL,
    role TEXT,
    date_inscripton TIMESTAMP
);

-----------------------------
--TABLE :  public.publication
-----------------------------


CREATE TABLE publication (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    role TEXT,
    date_modification TIMESTAMP,
    date_creation TIMESTAMP
);

------------------------------
--TABLE :  public.commentaire
------------------------------

CREATE TABLE commentaire (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    role TEXT,
    date_creation TIMESTAMP,
    date_modification TIMESTAMP
)


--------------------------------------------------------------------
--TABLE :  public.users_has_publication (association many to many)
--------------------------------------------------------------------

CREATE TABLE users_has_publication (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_users INTEGER NOT NULL,
    id_publication INTEGER NOT NULL,

    CONSTRAINT fk_cht_publication
    FOREIGN KEY (id_publication)
    REFERENCES public.publication(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_users
    FOREIGN KEY (id_users)
    REFERENCES public.users(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_publication_users UNIQUE (publication_id, user_id)
);


--------------------------------------------------------------------
--TABLE :  public.users_has_events (association many to many)
--------------------------------------------------------------------

CREATE TABLE users_has_events (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_users INTEGER NOT NULL,
    id_events INTEGER NOT NULL,

    CONSTRAINT fk_cht_events
    FOREIGN KEY (id_events)
    REFERENCES public.events(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_users
    FOREIGN KEY (id_users)
    REFERENCES public.users(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_events_users UNIQUE (events_id, users_id)
);

--------------------------------------------------------------------
--TABLE :  public.users_has_commentaire (association many to many)
--------------------------------------------------------------------

CREATE TABLE users_has_commentaire (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_commentaire INTEGER NOT NULL
    id_users INTEGER NOT NULL,

    CONSTRAINT fk_cht_commentaire 
    FOREIGN KEY (id_commentaire)
    REFERENCES public.commentaire(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_users
    FOREIGN KEY (id_users)
    REFERENCES public.users(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_commentaire_users UNIQUE (commentaire_id, users_id)
);

--------------------------------------------------------------------
--TABLE :  public.users_has_login (association many to many)
--------------------------------------------------------------------

CREATE TABLE users_has_login (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_users INTEGER NOT NULL,
    id_login INTEGER NOT NULL,

    CONSTRAINT fk_cht_login
    FOREIGN KEY (id_login)
    REFERENCES public.login(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_users
    FOREIGN KEY (id_users)
    REFERENCES public.users(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_login_users UNIQUE (login_id, users_id)
);

--------------------------------------------------------------------
--TABLE :  public.users_has_register (association many to many)
--------------------------------------------------------------------

CREATE TABLE users_has_register (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_users INTEGER NOT NULL,
    id_register INTEGER NOT NULL,

    CONSTRAINT fk_cht_register 
    FOREIGN KEY (id_register)
    REFERENCES public.register(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_users
    FOREIGN KEY (id_users)
    REFERENCES public.users(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_register_users UNIQUE (register_id, users_id)
);

--------------------------------------------------------------------
--TABLE :  public.users_has_discussion (association many to many)
--------------------------------------------------------------------

CREATE TABLE users_has_discussion (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_users INTEGER NOT NULL,
    id_discussion INTEGER NOT NULL,

    CONSTRAINT fk_cht_discussion
    FOREIGN KEY (id_discussion)
    REFERENCES public.discussion(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_users
    FOREIGN KEY (id_users)
    REFERENCES public.users(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_discussion_users UNIQUE (discussion_id, users_id)
);

--------------------------------------------------------------------
--TABLE :  public.users_has_directory (association many to many)
--------------------------------------------------------------------

CREATE TABLE users_has_directory (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_users INTEGER NOT NULL,
    id_directory INTEGER NOT NULL,

    CONSTRAINT fk_cht_directory
    FOREIGN KEY (id_directory)
    REFERENCES public.directory(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_users
    FOREIGN KEY (id_users)
    REFERENCES public.users(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_directory_users UNIQUE (directory_id, users_id)
);

--------------------------------------------------------------------
--TABLE :  public.admin_has_login (association many to many)
--------------------------------------------------------------------

CREATE TABLE admin_has_login (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_admin INTEGER NOT NULL,
    id_login INTEGER NOT NULL,

    CONSTRAINT fk_cht_login
    FOREIGN KEY (id_login)
    REFERENCES public.login(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_admin
    FOREIGN KEY (id_admin)
    REFERENCES public.admin(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_login_admin UNIQUE (login_id, admin_id)
);

--------------------------------------------------------------------
--TABLE :  public.admin_has_publication (association many to many)
--------------------------------------------------------------------

CREATE TABLE admin_has_publication (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_admin INTEGER NOT NULL,
    id_publication INTEGER NOT NULL,

    CONSTRAINT fk_cht_publication
    FOREIGN KEY (id_publication)
    REFERENCES public.publication(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_admin 
    FOREIGN KEY (id_admin)
    REFERENCES public.admin(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_publication_admin  UNIQUE (publication_id, admin_id)
);

--------------------------------------------------------------------
--TABLE :  public.amdin_has_discussion (association many to many)
--------------------------------------------------------------------

CREATE TABLE amdin_has_discussion (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_admin INTEGER NOT NULL,
    id_discussion INTEGER NOT NULL,

    CONSTRAINT fk_cht_discussion
    FOREIGN KEY (id_discussion)
    REFERENCES public.discussion(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_admin
    FOREIGN KEY (id_admin)
    REFERENCES public.admin(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_discussion_admin UNIQUE (discussion_id, admin_id)
);

--------------------------------------------------------------------
--TABLE :  public.admin_has_events (association many to many)
--------------------------------------------------------------------

CREATE TABLE admin_has_events (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_admin INTEGER NOT NULL,
    id_events INTEGER NOT NULL,

    CONSTRAINT fk_cht_events
    FOREIGN KEY (id_events)
    REFERENCES public.events(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_admin
    FOREIGN KEY (id_admin)
    REFERENCES public.admin(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_events_admin UNIQUE (events_id, admin_id)
);

--------------------------------------------------------------------
--TABLE :  public.admin_has_commentaire (association many to many)
--------------------------------------------------------------------

CREATE TABLE admin_has_commentaire (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_admin INTEGER NOT NULL,
    id_commentaire INTEGER NOT NULL,

    CONSTRAINT fk_cht_commentaire
    FOREIGN KEY (id_commentaire)
    REFERENCES public.commentaire(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_admin
    FOREIGN KEY (id_admin)
    REFERENCES public.admin(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_commentaire_admin UNIQUE (commentaire_id, admin_id)
);

--------------------------------------------------------------------
--TABLE :  public.admin_has_directory (association many to many)
--------------------------------------------------------------------

CREATE TABLE admin_has_directory (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_admin INTEGER NOT NULL,
    id_directory INTEGER NOT NULL,

    CONSTRAINT fk_cht_directory
    FOREIGN KEY (id_directory)
    REFERENCES public.directory(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_admin
    FOREIGN key (id_admin)
    REFERENCES public.admin(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_directory_admin UNIQUE (directory_id, admin_id)
);

-------------------------------------------------------------------------
--TABLE :  public.discussion_has_publication (association many to many)
-------------------------------------------------------------------------

CREATE TABLE discussion_has_publication (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_discussion INTEGER NOT NULL,
    id_publication INTEGER NOT NULL,

    CONSTRAINT fk_cht_publication
    FOREIGN KEY (id_publication)
    REFERENCES public.publication(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_discussion
    FOREIGN KEY (id_discussion)
    REFERENCES public.discussion(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_publication_discussion UNIQUE (publication_id, discussion_id)
);

-------------------------------------------------------------------------
--TABLE :  public.publication_has_commentaire (association many to many)
-------------------------------------------------------------------------

CREATE TABLE publication_has_commentaire (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_publication INTEGER NOT NULL,
    id_commentaire INTEGER NOT NULL,

    CONSTRAINT fk_cht_commentaire
    FOREIGN KEY (id_commentaire)
    REFERENCES public.commentaire(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_cht_publication
    FOREIGN KEY (id_publication)
    REFERENCES public.publication(id)
    ON DELETE CASCADE,

    CONSTRAINT uq_cht_commentaire_publication UNIQUE (commentaire_id, publication_id)
);

*/
_____________________________________________________________________________________________________

-----------------------------
-- TABLE : admin
-----------------------------

CREATE TABLE admin (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(50) NOT NULL,
    pseudo VARCHAR(100) NOT NULL,
    role TEXT,
    date_inscription TIMESTAMP 
);

-----------------------------
-- TABLE : users
-----------------------------

CREATE TABLE users (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pseudo VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    date_modification TIMESTAMP,
    date_inscription TIMESTAMP
);

-----------------------------
-- TABLE : discussion
-----------------------------

CREATE TABLE discussion (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT,
    role TEXT,
    publiee TIMESTAMP,
    date_creation TIMESTAMP,
    date_modification TIMESTAMP
);

-----------------------------
-- TABLE : events
-----------------------------

CREATE TABLE events (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT,
    date_creation TIMESTAMP,
    date_modification TIMESTAMP
);

-----------------------------
-- TABLE : publication
-----------------------------

CREATE TABLE publication (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT,
    role TEXT,
    date_modification TIMESTAMP,
    date_creation TIMESTAMP
);

-----------------------------
-- TABLE : commentaire
-----------------------------

CREATE TABLE commentaire (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT,
    role TEXT,
    date_creation TIMESTAMP,
    date_modification TIMESTAMP
);

----------------------------------------------------------
-- users_has_publication
----------------------------------------------------------

CREATE TABLE users_has_publication (

    id_users INTEGER NOT NULL,
    id_publication INTEGER NOT NULL,

    PRIMARY KEY (id_users, id_publication),

    FOREIGN KEY (id_publication)
        REFERENCES publication(id) ON DELETE CASCADE,

    FOREIGN KEY (id_users)
        REFERENCES users(id) ON DELETE CASCADE
);

----------------------------------------------------------
-- users_has_events
----------------------------------------------------------

CREATE TABLE users_has_events (

    id_users INTEGER NOT NULL,
    id_events INTEGER NOT NULL,

    PRIMARY KEY (id_users, id_events),

    FOREIGN KEY (id_events)
        REFERENCES events(id) ON DELETE CASCADE,

    FOREIGN KEY (id_users)
        REFERENCES users(id) ON DELETE CASCADE
);


----------------------------------------------------------
-- users_has_commentaire
----------------------------------------------------------

CREATE TABLE users_has_commentaire (

    id_users INTEGER NOT NULL,
    id_commentaire INTEGER NOT NULL,

    PRIMARY KEY (id_users, id_commentaire),

    FOREIGN KEY (id_commentaire)
        REFERENCES commentaire(id) ON DELETE CASCADE,

    FOREIGN KEY (id_users)
        REFERENCES users(id) ON DELETE CASCADE
);

----------------------------------------------------------
-- users_has_discussion
----------------------------------------------------------

CREATE TABLE users_has_discussion (

    id_users INTEGER NOT NULL,
    id_discussion INTEGER NOT NULL,

    PRIMARY KEY (id_users, id_discussion),

    FOREIGN KEY (id_discussion)
        REFERENCES discussion(id) ON DELETE CASCADE,

    FOREIGN KEY (id_users)
        REFERENCES users(id) ON DELETE CASCADE
);

----------------------------------------------------------
-- admin_has_publication
----------------------------------------------------------

CREATE TABLE admin_has_publication (

    id_admin INTEGER NOT NULL,
    id_publication INTEGER NOT NULL,

    PRIMARY KEY (id_admin, id_publication),

    FOREIGN KEY (id_publication)
        REFERENCES publication(id) ON DELETE CASCADE,

    FOREIGN KEY (id_admin)
        REFERENCES admin(id) ON DELETE CASCADE
);

----------------------------------------------------------
-- admin_has_discussion
----------------------------------------------------------

CREATE TABLE admin_has_discussion (

    id_admin INTEGER NOT NULL,
    id_discussion INTEGER NOT NULL,

    PRIMARY KEY (id_admin, id_discussion),

    FOREIGN KEY (id_discussion)
        REFERENCES discussion(id) ON DELETE CASCADE,

    FOREIGN KEY (id_admin)
        REFERENCES admin(id) ON DELETE CASCADE
);

----------------------------------------------------------
-- admin_has_events
----------------------------------------------------------

CREATE TABLE admin_has_events (

    id_admin INTEGER NOT NULL,
    id_events INTEGER NOT NULL,

    PRIMARY KEY (id_admin, id_events),

    FOREIGN KEY (id_events)
        REFERENCES events(id) ON DELETE CASCADE,

    FOREIGN KEY (id_admin)
        REFERENCES admin(id) ON DELETE CASCADE
);

----------------------------------------------------------
-- admin_has_commentaire
----------------------------------------------------------

CREATE TABLE admin_has_commentaire (

    id_admin INTEGER NOT NULL,
    id_commentaire INTEGER NOT NULL,

    PRIMARY KEY (id_admin, id_commentaire),

    FOREIGN KEY (id_commentaire)
        REFERENCES commentaire(id) ON DELETE CASCADE,

    FOREIGN KEY (id_admin)
        REFERENCES admin(id) ON DELETE CASCADE
);

----------------------------------------------------------
-- discussion_has_publication
----------------------------------------------------------

CREATE TABLE discussion_has_publication (

    id_discussion INTEGER NOT NULL,
    id_publication INTEGER NOT NULL,

    PRIMARY KEY (id_discussion, id_publication),

    FOREIGN KEY (id_publication)
        REFERENCES publication(id) ON DELETE CASCADE,

    FOREIGN KEY (id_discussion)
        REFERENCES discussion(id) ON DELETE CASCADE
);

----------------------------------------------------------
-- publication_has_commentaire
----------------------------------------------------------

CREATE TABLE publication_has_commentaire (

    id_publication INTEGER NOT NULL,
    id_commentaire INTEGER NOT NULL,

    PRIMARY KEY (id_publication, id_commentaire),

    FOREIGN KEY (id_commentaire)
        REFERENCES commentaire(id) ON DELETE CASCADE,
    
    FOREIGN KEY (id_publication)
        REFERENCES publication(id) ON DELETE CASCADE
);
