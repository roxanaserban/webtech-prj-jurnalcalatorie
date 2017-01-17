#webtech-prj-traveldb:
Crearea unui mic jurnal de calatorie

#Descriere proiect:
Fiind o persoana careia ii place sa calatoreasca, as dori sa recomand celor interesati si curiosi din fire diferite
atractii sau locuri pe care sa le poata vizita in Europa.

#Utilizatorii:
Utilizatorii sunt toate persoanele interesate si pasionate de calatorie.

#Entitati:
regiuni_europa:
*id_regiune
*denumire_regiune

tari:
*id_tara
*denumire_tara
*populatie_tara
*limba

orase:
*id_oras
*denumire_oras
*populatie_oras
*temperatura_medie

galerie_foto:
*id_poza
*denumire_poza

clima:
*id_clima
*tip_clima

locatii:
*id_locatie
*denumire_locatie
*categorie_locatie

mijloace-de-transport:
*id_transport
*denumire_transport
*pret_bilet


#Tehologii
NodeJs
NodeAdmin
MySQL

#ToDo
install mysql [done]
install node admin [done]
create the database [done]
install sequelize [done]
create a model [done]
CRUD orase [done]
interfata adaugare orase [done]