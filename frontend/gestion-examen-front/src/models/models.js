/**
 * [
 *     "N_Apo"   ==> STUDENT ==> 0
 *     "CNE"   ==> STUDENT ==> 1
 *     "Nom"   ==> STUDENT ==> ==> 2
 *     "Prenom"   ==> STUDENT ==> 3
 *
 *     "Filiere"   ==> FILIERE ==> 4
 *
 *     "Semestre"   ==> SEMESTRE ==> 5
 *
 *
 *     "M1"   ==> MODULE ==> 6
 *     "Ex_M1"   ==> MODULE ==> 7
 *     "NTab_M1"   ==> MODULE ==> 8
 *     "Loc_M1"   ==> MODULE ==> 9
 *     "Date_M1"   ==> MODULE ==> 10
 *     "Cr_M1"   ==> MODULE ==> 11
 *
 *     "M2"   ==> MODULE ==> 12
 *     "Ex_M2"   ==> MODULE ==> 13
 *     "NTab_M2"   ==> MODULE ==> 14
 *     "Loc_M2"   ==> MODULE ==> 15
 *     "Date_M2"   ==> MODULE ==> 16
 *     "Cr_M2"   ==> MODULE ==> 17
 *
 *
 *     "M3"   ==> MODULE ==> 18
 *     "Ex_M3"   ==> MODULE ==> 19
 *     "NTab_M3"   ==> MODULE ==> 20
 *     "Loc_M3"   ==> MODULE ==> 21
 *     "Date_M3"   ==> MODULE ==> 22
 *     "Cr_M3"   ==> MODULE ==> 23
 *
 *
 *     "M4"   ==> MODULE ==> 24
 *     "Ex_M4"   ==> MODULE ==> 25
 *     "NTab_M4"   ==> MODULE ==> 26
 *     "Loc_M4"   ==> MODULE ==> 27
 *     "Date_M4"   ==> MODULE ==> 28
 *     "Cr_M4"   ==> MODULE ==> 29
 *
 *
 *     "M5"   ==> MODULE ==> 30
 *     "Ex_M5"   ==> MODULE ==> 31
 *     "NTab_M5"   ==> MODULE ==> 32
 *     "Loc_M5"   ==> MODULE ==> 33
 *     "Date_M5"   ==> MODULE ==> 34
 *     "Cr_M5"   ==> MODULE ==> 35
 *
 *
 *     "M6"   ==> MODULE ==> 36
 *     "Ex_M6"   ==> MODULE ==> 37
 *     "NTab_M6"   ==> MODULE ==> 38
 *     "Loc_M6"   ==> MODULE ==> 39
 *     "Date_M6"   ==> MODULE ==> 40
 *     "Cr_M6" ==> MODULE ==> 41
 * ]
 * =================================================================
 *                              EXAMPLE DATA
 * =================================================================
 *
 * [
 *     1904027, ==>N_Apo
 *     "G138169915"   ==> MODULE
 *     "AAOUINATI"   ==> MODULE
 *     "El Housseine"   ==> MODULE
 *     "SMA"   ==> MODULE
 *     "S3"   ==> MODULE
 *     "Analyse 4"   ==> MODULE
 *     1,
 *     19,
 *     "A-7"   ==> MODULE
 *     "08/03/2021"   ==> MODULE
 *     "de 09H00 à 10H30"   ==> MODULE
 *     "Analyse 5"   ==> MODULE
 *     1,
 *     19,
 *     "A-7"   ==> MODULE
 *     "05/03/2021"   ==> MODULE
 *     "de 17H00 à 18H30"   ==> MODULE
 *     "Algèbre 4"   ==> MODULE
 *     1,
 *     19,
 *     "A-7"   ==> MODULE
 *     "09/03/2021"   ==> MODULE
 *     "de 15H00 à 16H30"   ==> MODULE
 *     "Mécanique du solide (1h30+30'TP) "   ==> MODULE
 *     1,
 *     19,
 *     "A-7"   ==> MODULE
 *     "08/03/2021"   ==> MODULE
 *     "de 11H00 à 13H00"   ==> MODULE
 *     "Electricité 2    "   ==> MODULE
 *     1,
 *     19,
 *     "A-7"   ==> MODULE
 *     "09/03/2021"   ==> MODULE
 *     "de 17H00 à 18H30"   ==> MODULE
 *     ""   ==> MODULE
 *     0,
 *     ""   ==> MODULE
 *     ""   ==> MODULE
 *     ""   ==> MODULE
 *     ""
 * ]
 */

import {number, string} from "prop-types";

let Student = {
    id: number,
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    cin: string,
    role: string,
    numAppoge: string,
    cne: string
};
let Teacher = {
    id: number,
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    cin: string,
    role: string,
    nppr: string
};

let Semestre = {
    id: number,
    libelle: string
}

let Filiere = {
    id: number,
    libelle: string
}

let Salle = {
    id: number,
    numero: string,
    capacite: string
}
let Module = {
    id: number,
    libelle: string,
    filiere: Filiere,
    semestre: Semestre,
}

export {Module, Filiere, Student, Semestre, Salle, Teacher}