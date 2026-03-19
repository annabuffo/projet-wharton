USERS: id_user, pseudo, password, date_modification, date_inscription
ADMIN: id_admin, email, password, pseudo, role, date_inscription
PUBLICATION: id_publication, title, role, date_creation, date_modification
COMMENTAIRE: id_commentaire, title, role, date_creation, date_modification
DISCUSSION: id_discussion, title, role, publiee, date_creation, date_modification
EVENTS: id_event, title, date_creation, date_modification

CREER, 0N USERS, 01 PUBLICATION
ECRIRE, 0N USERS, 01 COMMENTAIRE
APPARTENIR, 1N COMMENTAIRE, 01 PUBLICATION
PARTICIPER_EVENT, 0N USERS, 0N EVENTS
PARTICIPER_DISCUSSION, 0N USERS, 0N DISCUSSION
CONTENIR, 0N DISCUSSION, 0N PUBLICATION
GERER_PUBLICATION, 0N ADMIN, 0N PUBLICATION
GERER_DISCUSSION, 0N ADMIN, 0N DISCUSSION
GERER_EVENT, 0N ADMIN, 0N EVENTS
GERER_COMMENTAIRE, 0N ADMIN, 0N COMMENTAIRE


___________________________________________________________________________________


[users] ---< écrit >--- [commentaire] ---< appartient >--- [publication]

[users] ---< possède >--- [publication]
[users] ---< participe >--- [events]
[users] ---< participe >--- [discussion]
[discussion] ---< contient >--- [publication]

[admin] ---< gère >--- [publication]
[admin] ---< gère >--- [discussion]
[admin] ---< gère >--- [events]
[admin] ---< gère >--- [commentaire]

[lien moccodo](https://www.mocodo.net/?mcd=eNqVksFuhCAQhu8-BQ_goXvtzbKkIamsQe3VUKEJiYgBbV-_iO46um3anpCZf775Z7AuCS8fkZbN5JVL0eDVJG04hfef1skUSTGqxlip33UrRm37NaR73zo9zJEkO-eURYqQRgeFMkJ3kHLlOtupbwBF_fRCcVbRy4IZprfu1m7U41wESlunoBXoLsGXPCesyignEdVaY1Q_Cu3Uf1FnWuK6LK-mpPbt5P29p-hW_YVIXoO1Zd_qI7i6gX6tTDAnhKfogaF6frPwdUJgbQnBPIx8EIBlJFlRZLwijAbKicHUHWsWUkwLwpvoeEdlaJkCqrZNHaRbIjwMW7vv4vEKmz8THoggEhXxF_tBe4BtUtB9UW7TbKJ1mkWw3wqUgcwXKeL_gQ==)

