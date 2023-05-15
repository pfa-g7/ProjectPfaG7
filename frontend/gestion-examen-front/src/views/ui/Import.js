import React, {useState} from 'react';
import * as XLSX from 'xlsx';

const ExcelUploadComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = async () => {
        try {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const workbook = XLSX.read(arrayBuffer, {type: 'array'});
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const data = XLSX.utils.sheet_to_json(worksheet, {header: 1});
                const columns = data[1];
                data.splice(0, 2)

                console.log(data)
                for (let column of columns) {
                    console.log(column)

                }
                for (let row of data) {
                    console.log('===========================================================================')

                    /**
                     * create student
                     */

                    const student = {
                        numAppoge: row[0],
                        cne: row[1],
                        lastName: row[2],
                        firstName: row[3],
                        email: row[2].replace(/\s/g, '') + row[3].replace(/\s/g, '') + 'gmail.com' // generate email from firstname and lastname
                    }
                    console.log(student)

                    /**
                     * create Filiere
                     * @type {{libelle: string}}
                     */
                    const filiere = {
                        libelle: row[4]
                    }
                    console.log(filiere)

                    /**
                     * create semestre
                     * @type {{libelle: string}}
                     */
                    const semestre = {
                        libelle: row[5]
                    }
                    console.log(semestre)

                    /**
                     * create modules
                     */

                    const module1 = {
                        libelle: row[6],
                        semestre: semestre,
                        filiere: filiere
                    }
                    console.log(module1)

                    const module2 = {
                        libelle: row[12],
                        semestre: semestre,
                        filiere: filiere
                    }
                    console.log(module2)


                    const module3 = {
                        libelle: row[18],
                        semestre: semestre,
                        filiere: filiere
                    }
                    console.log(module3)

                    const module4 = {
                        libelle: row[24],
                        semestre: semestre,
                        filiere: filiere
                    }
                    console.log(module4)


                    const module5 = {
                        libelle: row[30],
                        semestre: semestre,
                        filiere: filiere
                    }
                    console.log(module5)

                    const module6 = {
                        libelle: row[36],
                        semestre: semestre,
                        filiere: filiere
                    }
                    console.log(module6)

                    /**
                     * create exam1
                     * @type {{salle: *, student: {numAppoge: *, lastName: *, firstName: *, cne: *, email: string}, module: {filiere: {libelle: string}, libelle: *, semestre: {libelle: string}}, presence: *, numTable: *}}
                     * from row 7 --> 11 =>  exam1
                     */

                    const exam1 = {
                        presence: row[7] === 1, // set true if row[7] = 1 else false
                        numTable: row[8],
                        salle: row[9],
                        date: row[10],
                        heure: row[11],
                        student: student,
                        module: module1,
                    }
                    console.log(exam1)


                    const exam2 = {
                        presence: row[13] === 1, // set true if row[7] = 1 else false
                        numTable: row[14],
                        salle: row[15],
                        date: row[16],
                        heure: row[17],
                        student: student,
                        module: module2,
                    }
                    console.log(exam2)


                    const exam3 = {
                        presence: row[19] === 1, // set true if row[7] = 1 else false
                        numTable: row[20],
                        salle: row[21],
                        date: row[22],
                        heure: row[23],
                        student: student,
                        module: module3,
                    }
                    console.log(exam3)


                    const exam4 = {
                        presence: row[25] === 1, // set true if row[7] = 1 else false
                        numTable: row[26],
                        salle: row[27],
                        date: row[28],
                        heure: row[29],
                        student: student,
                        module: module4,
                    }
                    console.log(exam4)


                    const exam5 = {
                        presence: row[31] === 1, // set true if row[7] = 1 else false
                        numTable: row[32],
                        salle: row[33],
                        date: row[34],
                        heure: row[35],
                        student: student,
                        module: module5,
                    }
                    console.log(exam5)


                    const exam6 = {
                        presence: row[37] === 1, // set true if row[7] = 1 else false
                        numTable: row[38],
                        salle: row[39],
                        date: row[40],
                        heure: row[41],
                        student: student,
                        module: module6,
                    }
                    console.log(exam6)

                }
                // Send the data to the server
                // axios.post('/api/upload', { data })
                //     .then((response) => {
                //         console.log(response.data);
                //     })
                //     .catch((error) => {
                //         console.error(error);
                //     });
            };
            fileReader.readAsArrayBuffer(selectedFile);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ExcelUploadComponent;

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