import express, { query } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mysql from "mysql";
import { v2 as cloudinary } from 'cloudinary';
import multer from "multer";
const app = express()
const port = 3000
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

cloudinary.config({
    cloud_name: "dxl0rgckl",
    api_key: "456365272847398",
    api_secret: "q4F9RnqPenK2_pXv8cAEl8K3p4U",
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'pass123',
    database: 'dbtest'
});


app.post('/', (req, res) => {
    const { fname, mname, lname, MaritalStatus, Nationality, Gender, IDPoof, CA1, PA1, IDFile, Father, Email, AdvertisementNo, category, DOB, AppNo, date, post, Department, Photo } = req.body;
    const { uid } = req.body;
    pool.query('INSERT INTO `user` (`idUser`,`First Name`,`Middle Name`,`Last Name`,`Marital Status`,`Nationality`,`Gender`,`ID Proof`,`Correspondence Address`,`Permanent Address`,`Father Name`,`Email`,`Advertisement No.`,`Category`,`DOB`,`Application No.`,`Date of Application`,`Post`,`Department`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [uid, fname, mname, lname, MaritalStatus, Nationality, Gender, IDPoof, CA1, PA1, Father, Email, AdvertisementNo, category, DOB, AppNo, date, post, Department], (error, results, fields) => {
        if (error) {
            console.error("Error inserting data: ", error);
            res.status(500).send("Error inserting data");
        } else {
            console.log("Data inserted successfully");
            res.status(200).send("Data inserted successfully");
        }
    });

    const { email, AltEmail, Mobile, AltMobile, Landline } = req.body;
    pool.query('INSERT INTO `contact` (`idUser`,`Email`,`AltEmail`,`Mobile`,`AltMobile`,`Landline`) VALUES (?,?,?,?,?,?)', [uid, Email, AltEmail, Mobile, AltMobile, Landline]);

    console.log(req.body);

});


app.get('/', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT user.*, contact.* FROM user JOIN contact ON user.idUser = contact.idUser WHERE user.idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.post('/pg2', (req, res) => {
    // console.log(req.body);
    const { uid } = req.body;
    const { University, Department, PhDS, YoJ, Defence, Award, TPhD, MDegree, MUniversity, MBranch, MYoJ, MYoC, MDuration, MCGPA, MDivision, BDegree, BUniversity, BBranch, BYoJ, BYoC, BDuration, BCGPA, BDivision, School10, PassingYear10, Grade10, Division10, School12, PassingYear12, Grade12, Division12 } = req.body;

    pool.query('INSERT INTO `phd` (`idUser`,`University`,`Name of PhD Supervisor`,`Date of Thesis Defence`,`Title of PhD Thesis`,`Department`,`Year of Joining`,`Date of Award`) VALUES (?,?,?,?,?,?,?,?)', [uid, University, PhDS, Defence, TPhD, Department, YoJ, Award], (error) => {
        if (error) {
            console.error("Error inserting data: ", error);
            res.status(500).send("Error inserting data");
        }
    });

    pool.query('INSERT INTO `pg` (`idUser`,`Degree`,`Branch`,`Year of Completion`,`CGPA`,`Institute`,`Year of Joining`,`Duration`,`Division`) VALUES (?,?,?,?,?,?,?,?,?)', [uid, MDegree, MBranch, MYoC, MCGPA, MUniversity, MYoJ, MDuration, MDivision]);

    pool.query('INSERT INTO `ug` (`idUser`,`Degree`,`Branch`,`Year of Completion`,`CGPA`,`Institute`,`Year of Joining`,`Duration`,`Division`) VALUES (?,?,?,?,?,?,?,?,?)', [uid, BDegree, BBranch, BYoC, BCGPA, BUniversity, BYoJ, BDuration, BDivision]);

    pool.query('INSERT INTO `10th` (`idUser`,`School`,`Year of Passing`,`Grade`,`Division`) VALUES (?,?,?,?,?)', [uid, School10, PassingYear10, Grade10, Division10], (error) => {
        if (error) {
            console.error("Error inserting data: ", error);
            res.status(500).send("Error inserting data");
        }
    });

    pool.query('INSERT INTO `12th` (`idUser`,`School`,`Year of Passing`,`Grade`,`Division`) VALUES (?,?,?,?,?)', [uid, School12, PassingYear12, Grade12, Division12], (error) => {
        if (error) {
            console.error("Error inserting data: ", error);
            res.status(500).send("Error inserting data");
        }
    });

    const { degree0, college0, subjects0, YearOfJoining0, YearOfCompletion0, duration0, percentage0, division0 } = req.body;

    const { degree1, college1, subjects1, YearOfJoining1, YearOfCompletion1, duration1, percentage1, division1 } = req.body;

    const { degree2, college2, subjects2, YearOfJoining2, YearOfCompletion2, duration2, percentage2, division2 } = req.body;

    if (degree0 != undefined) {
        pool.query('INSERT INTO `additional education` (`idUser`,`Degree`,`Institute`,`Branch`,`Year of Joining`,`Year of Completion`,`Duration`,`CGPA`,`Division`) VALUES (?,?,?,?,?,?,?,?,?)', [uid, degree0, college0, subjects0, YearOfJoining0, YearOfCompletion0, duration0, percentage0, division0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        });
    }

    if (degree1 != undefined) {
        pool.query('INSERT INTO `additional education` (`idUser`,`Degree`,`Institute`,`Branch`,`Year of Joining`,`Year of Completion`,`Duration`,`CGPA`,`Division`) VALUES (?,?,?,?,?,?,?,?,?)', [uid, degree1, college1, subjects1, YearOfJoining1, YearOfCompletion1, duration1, percentage1, division1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        });
    }

    if (degree2 != undefined) {
        pool.query('INSERT INTO `additional education` (`idUser`,`Degree`,`Institute`,`Branch`,`Year of Joining`,`Year of Completion`,`Duration`,`CGPA`,`Division`) VALUES (?,?,?,?,?,?,?,?,?)', [uid, degree2, college2, subjects2, YearOfJoining2, YearOfCompletion2, duration2, percentage2, division2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

})


app.get('/phd', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM phd WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/pg', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM pg WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/ug', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM ug WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/10th', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM 10th WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/12th', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM 12th WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/pg2', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `additional education` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});


app.post('/pg3', (req, res) => {
    // console.log(req.body);
    const { uid } = req.body;
    const { Position, Status, DoL, Institution, DoJ, Duration } = req.body;

    pool.query('INSERT INTO `present employement` (`idUser`,`Position`,`Status`,`Date of Leaving`,`Institution`,`Date of Joining`,`Duration`) VALUES (?,?,?,?,?,?,?)', [uid, Position, Status, DoL, Institution, DoJ, Duration], (error) => {
        if (error) {
            console.error("Error inserting data: ", error);
            res.status(500).send("Error inserting data");
        }
    })

    const { Pos0, Inst0, DOJ10, DoL10, Duration0 } = req.body;
    const { Pos1, Inst1, DOJ11, DoL11, Duration1 } = req.body;
    const { Pos2, Inst2, DOJ12, DoL12, Duration2 } = req.body;

    if (Pos0 != undefined) {
        pool.query('INSERT INTO `employment history` (`idUser`,`Position`,`Institution`,`Date of Leaving`,`Date of Joining`,`Duration`) VALUES (?,?,?,?,?,?)', [uid, Pos0, Inst0, DoL10, DOJ10, Duration0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (Pos1 != undefined) {
        pool.query('INSERT INTO `employment history` (`idUser`,`Position`,`Institution`,`Date of Leaving`,`Date of Joining`,`Duration`) VALUES (?,?,?,?,?,?)', [uid, Pos1, Inst1, DoL11, DOJ11, Duration1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (Pos2 != undefined) {
        pool.query('INSERT INTO `employment history` (`idUser`,`Position`,`Institution`,`Date of Leaving`,`Date of Joining`,`Duration`) VALUES (?,?,?,?,?,?)', [uid, Pos2, Inst2, DoL12, DOJ12, Duration2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

    const { TPos0, TEmployer0, Course0, UG0, Nos0, TDoJ0, TDoL0, TDuration0 } = req.body;
    const { TPos1, TEmployer1, Course1, UG1, Nos1, TDoJ1, TDoL1, TDuration1 } = req.body;
    const { TPos2, TEmployer2, Course2, UG2, Nos2, TDoJ2, TDoL2, TDuration2 } = req.body;

    if (TPos0 != undefined) {
        pool.query('INSERT INTO `teaching experience` (`idUser`,`Position`,`Employer`,`Course Taught`,`UG/PG`,`No. of Students`,`Date of Joining`,`Date of Leaving`,`Duration`) VALUES (?,?,?,?,?,?,?,?,?)', [uid, TPos0, TEmployer0, Course0, UG0, Nos0, TDoJ0, TDoL0, TDuration0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (TPos1 != undefined) {
        pool.query('INSERT INTO `teaching experience` (`idUser`,`Position`,`Employer`,`Course Taught`,`UG/PG`,`No. of Students`,`Date of Joining`,`Date of Leaving`,`Duration`) VALUES (?,?,?,?,?,?,?,?,?)', [uid, TPos1, TEmployer1, Course1, UG1, Nos1, TDoJ1, TDoL1, TDuration1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (TPos2 != undefined) {
        pool.query('INSERT INTO `teaching experience` (`idUser`,`Position`,`Employer`,`Course Taught`,`UG/PG`,`No. of Students`,`Date of Joining`,`Date of Leaving`,`Duration`) VALUES (?,?,?,?,?,?,?,?,?)', [uid, TPos2, TEmployer2, Course2, UG2, Nos2, TDoJ2, TDoL2, TDuration2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

    const { RPos0, RInstitute0, Supervisor0, RDoJ0, RDoL0, RDuration0 } = req.body;
    const { RPos1, RInstitute1, Supervisor1, RDoJ1, RDoL1, RDuration1 } = req.body;
    const { RPos2, RInstitute2, Supervisor2, RDoJ2, RDoL2, RDuration2 } = req.body;

    if (RPos0 != undefined) {
        pool.query('INSERT INTO `research experience` (`idUser`,`Position`,`Institute`,`Supervisor`,`Date of Joining`,`Date of Leaving`,`Duration`) VALUES (?,?,?,?,?,?,?)', [uid, RPos0, RInstitute0, Supervisor0, RDoJ0, RDoL0, RDuration0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (RPos1 != undefined) {
        pool.query('INSERT INTO `research experience` (`idUser`,`Position`,`Institute`,`Supervisor`,`Date of Joining`,`Date of Leaving`,`Duration`) VALUES (?,?,?,?,?,?,?)', [uid, RPos1, RInstitute1, Supervisor1, RDoJ1, RDoL1, RDuration1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (RPos2 != undefined) {
        pool.query('INSERT INTO `research experience` (`idUser`,`Position`,`Institute`,`Supervisor`,`Date of Joining`,`Date of Leaving`,`Duration`) VALUES (?,?,?,?,?,?,?)', [uid, RPos2, RInstitute2, Supervisor2, RDoJ2, RDoL2, RDuration2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

    const { Organization0, WorkP0, IDoL0, IDuration0 } = req.body;
    const { Organization1, WorkP1, IDoL1, IDuration1 } = req.body;
    const { Organization2, WorkP2, IDoL2, IDuration2 } = req.body;

    if (WorkP0 != undefined) {
        pool.query('INSERT INTO `industrial experience` (`idUser`,`Organization`,`Work Profile`,`Date of Leaving`,`Duration`) VALUES (?,?,?,?,?)', [uid, Organization0, WorkP0, IDoL0, IDuration0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

    if (WorkP1 != undefined) {
        pool.query('INSERT INTO `industrial experience` (`idUser`,`Organization`,`Work Profile`,`Date of Leaving`,`Duration`) VALUES (?,?,?,?,?)', [uid, Organization1, WorkP1, IDoL1, IDuration1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (WorkP2 != undefined) {
        pool.query('INSERT INTO `industrial experience` (`idUser`,`Organization`,`Work Profile`,`Date of Leaving`,`Duration`) VALUES (?,?,?,?,?)', [uid, Organization2, WorkP2, IDoL2, IDuration2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

})

app.get('/pre', (req, res) => {
    const uid = req.query.uid;
    console.log(uid);
    pool.query('SELECT * FROM `present employement` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/his', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `employment history` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/te', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `teaching experience` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/re', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `research experience` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/ie', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `industrial experience` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});



app.post('/pg4', (req, res) => {
    // console.log(req.body);
    const { uid } = req.body;
    // console.log("hello");
    const { NoIP, NoP, NoCP, NoPat, NoB, NoBC, NoNC } = req.body;
    pool.query('INSERT INTO `summary of publication` (`idUser`,`Number of International Journal Paper`,`Number of International Conference Paper`,`Number of Patent`,`Number of Book Chapter`,`Number of National Journal Paper`,`Number of National Conference Paper`,`Number of Book`) VALUES (?,?,?,?,?,?,?,?)', [uid, NoIP, NoCP, NoPat, NoBC, NoP, NoNC, NoB], (error) => {
        if (error) {
            console.error("Error inserting data: ", error);
            res.status(500).send("Error inserting data");
        }
    })

    const { Author0, Title0, Journal0, Year0, Imapact0, doi0, status0 } = req.body;
    if (Author0 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author0, Title0, Journal0, Year0, Imapact0, doi0, status0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author1, Title1, Journal1, Year1, Imapact1, doi1, status1 } = req.body;
    if (Author1 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author1, Title1, Journal1, Year1, Imapact1, doi1, status1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author2, Title2, Journal2, Year2, Imapact2, doi2, status2 } = req.body;
    if (Author2 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author2, Title2, Journal2, Year2, Imapact2, doi2, status2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author3, Title3, Journal3, Year3, Imapact3, doi3, status3 } = req.body;
    if (Author3 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author3, Title3, Journal3, Year3, Imapact3, doi3, status3], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author4, Title4, Journal4, Year4, Imapact4, doi4, status4 } = req.body;
    if (Author4 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author4, Title4, Journal4, Year4, Imapact4, doi4, status4], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author5, Title5, Journal5, Year5, Imapact5, doi5, status5 } = req.body;
    if (Author5 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author5, Title5, Journal5, Year5, Imapact5, doi5, status5], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author6, Title6, Journal6, Year6, Imapact6, doi6, status6 } = req.body;
    if (Author6 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author6, Title6, Journal6, Year6, Imapact6, doi6, status6], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author7, Title7, Journal7, Year7, Imapact7, doi7, status7 } = req.body;
    if (Author7 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author7, Title7, Journal7, Year7, Imapact7, doi7, status7], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author8, Title8, Journal8, Year8, Imapact8, doi8, status8 } = req.body;
    if (Author8 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author8, Title8, Journal8, Year8, Imapact8, doi8, status8], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author9, Title9, Journal9, Year9, Imapact9, doi9, status9 } = req.body;
    if (Author9 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author9, Title9, Journal9, Year9, Imapact9, doi9, status9], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Author10, Title10, Journal10, Year10, Imapact10, doi10, status10 } = req.body;
    if (Author10 != undefined) {
        pool.query('INSERT INTO `10 best publication` (`idUser`,`Author`,`Title`,`Name of Journal`,`Year Vol Page`,`Impact Factor`,`DOI`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, Author10, Title10, Journal10, Year10, Imapact10, doi10, status10], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

    const { patent0, inventor0, ToP0, CoP0, PN0, DoF0, DoP0, PS0 } = req.body;
    pool.query('INSERT INTO `patents` (`idUser`,`Inventor`,`Title of Patent`,`Country of Patent`,`Patent Number`,`Date of Filing`,`Date of Publish`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, inventor0, ToP0, CoP0, PN0, DoF0, DoP0, PS0], (error) => {
        if (error) {
            console.error("Error inserting data: ", error);
            res.status(500).send("Error inserting data");
        }
    })


    const { patent1, inventor1, ToP1, CoP1, PN1, DoF1, DoP1, PS1 } = req.body;
    if (patent1 != undefined) {
        pool.query('INSERT INTO `patents` (`idUser`,`Inventor`,`Title of Patent`,`Country of Patent`,`Patent Number`,`Date of Filing`,`Date of Publish`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, inventor1, ToP1, CoP1, PN1, DoF1, DoP1, PS1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }


    const { patent2, inventor2, ToP2, CoP2, PN2, DoF2, DoP2, PS2 } = req.body;
    if (patent2 != undefined) {
        pool.query('INSERT INTO `patents` (`idUser`,`Inventor`,`Title of Patent`,`Country of Patent`,`Patent Number`,`Date of Filing`,`Date of Publish`,`Status`) VALUES (?,?,?,?,?,?,?,?)', [uid, inventor2, ToP2, CoP2, PN2, DoF2, DoP2, PS2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

    const { Aut0, TB0, YoP0, ISBN0 } = req.body;
    const { BCAuth0, ToBCh0, YoPC0, ISBNC0 } = req.body;

    if (Aut0 != undefined) {
        pool.query('INSERT INTO `book` (`idUser`,`Author`,`Title of Book`,`Year of Publication`,`ISBN`) VALUES (?,?,?,?,?)', [uid, Aut0, TB0, YoP0, ISBN0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (BCAuth0 != undefined) {
        pool.query('INSERT INTO `book chapter` (`idUser`,`Author`,`Title of Book Chapter`,`ISBN`,`Year of Publication`) VALUES (?,?,?,?,?)', [uid, BCAuth0, ToBCh0, ISBNC0, YoPC0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Aut1, TB1, YoP1, ISBN1 } = req.body;
    const { BCAuth1, ToBCh1, YoPC1, ISBNC1 } = req.body;

    if (Aut1 != undefined) {
        pool.query('INSERT INTO `book` (`idUser`,`Author`,`Title of Book`,`Year of Publication`,`ISBN`) VALUES (?,?,?,?,?)', [uid, Aut1, TB1, YoP1, ISBN1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (BCAuth1 != undefined) {
        pool.query('INSERT INTO `book chapter` (`idUser`,`Author`,`Title of Book Chapter`,`ISBN`,`Year of Publication`) VALUES (?,?,?,?,?)', [uid, BCAuth1, ToBCh1, ISBNC1, YoPC1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Aut2, TB2, YoP2, ISBN2 } = req.body;
    const { BCAuth2, ToBCh2, YoPC2, ISBNC2 } = req.body;

    if (Aut2 != undefined) {
        pool.query('INSERT INTO `book` (`idUser`,`Author`,`Title of Book`,`Year of Publication`,`ISBN`) VALUES (?,?,?,?,?)', [uid, Aut2, TB2, YoP2, ISBN2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    if (BCAuth2 != undefined) {
        pool.query('INSERT INTO `book chapter` (`idUser`,`Author`,`Title of Book Chapter`,`ISBN`,`Year of Publication`) VALUES (?,?,?,?,?)', [uid, BCAuth2, ToBCh2, ISBNC2, YoPC2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

    const { gScholarLink } = req.body;
    pool.query('UPDATE `user` SET `Google Scholar Link` = ? WHERE `idUser` = ?', [gScholarLink, uid], (error) => {
        if (error) {
            console.error("Error updating data: ", error);
            res.status(500).send("Error updating data");
        }
    });

})

app.get('/sum', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `summary of publication` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/best', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `10 best publication` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/pat', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `patents` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/book', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `book` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/bc', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `book chapter` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/g', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT `Google Scholar Link` FROM `user` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.post('/pg5', (req, res) => {
    // console.log(req.body);
    const { uid } = req.body;
    const { NoPS0, Membership0 } = req.body;
    if (NoPS0 != undefined) {
        pool.query('INSERT INTO `membership of professional societies` (`idUser`,`Name of Professional Society`,`Membership Status`) VALUES (?,?,?)', [uid, NoPS0, Membership0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { NoPS1, Membership1 } = req.body;
    if (NoPS1 != undefined) {
        pool.query('INSERT INTO `membership of professional societies` (`idUser`,`Name of Professional Society`,`Membership Status`) VALUES (?,?,?)', [uid, NoPS1, Membership1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { NoPS2, Membership2 } = req.body;
    if (NoPS2 != undefined) {
        pool.query('INSERT INTO `membership of professional societies` (`idUser`,`Name of Professional Society`,`Membership Status`) VALUES (?,?,?)', [uid, NoPS2, Membership2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Training0, Org0, Year0, Dur0 } = req.body;
    if (Training0 != undefined) {
        pool.query('INSERT INTO `professional training` (`idUser`,`Type of Training Received`,`Organization`,`Year`,`Duration`) VALUES (?,?,?,?,?)', [uid, Training0, Org0, Year0, Dur0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Training1, Org1, Year1, Dur1 } = req.body;
    if (Training1 != undefined) {
        pool.query('INSERT INTO `professional training` (`idUser`,`Type of Training Received`,`Organization`,`Year`,`Duration`) VALUES (?,?,?,?,?)', [uid, Training1, Org1, Year1, Dur1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Training02, Org02, Year02, Dur02 } = req.body;
    if (Training02 != undefined) {
        pool.query('INSERT INTO `professional training` (`idUser`,`Type of Training Received`,`Organization`,`Year`,`Duration`) VALUES (?,?,?,?,?)', [uid, Training02, Org02, Year02, Dur02], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Award0, AwardedBy0, Year10 } = req.body;
    if (Award0 != undefined) {
        pool.query('INSERT INTO `awards and recognition` (`idUser`,`Name of Award`,`Awarded By`,`Year`) VALUES (?,?,?,?)', [uid, Award0, AwardedBy0, Year10], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Award1, AwardedBy1, Year11 } = req.body;
    if (Award1 != undefined) {
        pool.query('INSERT INTO `awards and recognition` (`idUser`,`Name of Award`,`Awarded By`,`Year`) VALUES (?,?,?,?)', [uid, Award1, AwardedBy1, Year11], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Award2, AwardedBy2, Year12 } = req.body;
    if (Award2 != undefined) {
        pool.query('INSERT INTO `awards and recognition` (`idUser`,`Name of Award`,`Awarded By`,`Year`) VALUES (?,?,?,?)', [uid, Award2, AwardedBy2, Year12], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Sponsoring0, ToP0, Amount0, Period0, Role0, Status0 } = req.body;
    if (Award0 != undefined) {
        pool.query('INSERT INTO `sponsored project` (`idUser`,`Sponsoring Agency`,`Title of Project`,`Sanctioned Amount`,`Period`,`Role`,`Status`) VALUES (?,?,?,?,?,?,?)', [uid, Sponsoring0, ToP0, Amount0, Period0, Role0, Status0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Orga0, ToP20, Amount20, Period20, Role20, Status20 } = req.body;
    if (Orga0 != undefined) {
        pool.query('INSERT INTO `consultancy project` (`idUser`,`Organization`,`Title of Project`,`Amount of Grant`,`Period`,`Role`,`Status`) VALUES (?,?,?,?,?,?,?)', [uid, Orga0, ToP20, Amount20, Period20, Role20, Status20], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Sponsoring1, ToP1, Amount1, Period1, Role1, Status1 } = req.body;
    if (Award1 != undefined) {
        pool.query('INSERT INTO `sponsored project` (`idUser`,`Sponsoring Agency`,`Title of Project`,`Sanctioned Amount`,`Period`,`Role`,`Status`) VALUES (?,?,?,?,?,?,?)', [uid, Sponsoring1, ToP1, Amount1, Period1, Role1, Status1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Orga1, ToP21, Amount21, Period21, Role21, Status21 } = req.body;
    if (Orga1 != undefined) {
        pool.query('INSERT INTO `consultancy project` (`idUser`,`Organization`,`Title of Project`,`Amount of Grant`,`Period`,`Role`,`Status`) VALUES (?,?,?,?,?,?,?)', [uid, Orga1, ToP21, Amount21, Period21, Role21, Status21], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Sponsoring2, ToP2, Amount2, Period2, Role2, Status2 } = req.body;
    if (Award2 != undefined) {
        pool.query('INSERT INTO `sponsored project` (`idUser`,`Sponsoring Agency`,`Title of Project`,`Sanctioned Amount`,`Period`,`Role`,`Status`) VALUES (?,?,?,?,?,?,?)', [uid, Sponsoring2, ToP2, Amount2, Period2, Role2, Status2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { Orga2, ToP22, Amount22, Period22, Role22, Status22 } = req.body;
    if (Orga2 != undefined) {
        pool.query('INSERT INTO `consultancy project` (`idUser`,`Organization`,`Title of Project`,`Amount of Grant`,`Period`,`Role`,`Status`) VALUES (?,?,?,?,?,?,?)', [uid, Orga2, ToP22, Amount22, Period22, Role22, Status22], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
})

app.get('/mem', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `membership of professional societies` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/pt', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `professional training` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/aw', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `awards and recognition` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/sp', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `sponsored project` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.get('/cp', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `consultancy project` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});




app.post('/pg6', (req, res) => {
    // console.log(req.body);
    const { uid } = req.body;
    const { PName0, PTitle0, PRole0, POngoing0, PSince0 } = req.body;
    if (PName0 != "") {
        pool.query('INSERT INTO `phd supervision` (`idUser`,`Name`,`Title of Thesis`,`Role`,`Ongoing/Completed`,`Ongoing Since`) VALUES (?,?,?,?,?,?)', [uid, PName0, PTitle0, PRole0, POngoing0, PSince0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { MName0, MTitle0, MRole0, MOngoing0, MSince0 } = req.body;
    if (MName0 != undefined) {
        pool.query('INSERT INTO `master degree` (`idUser`,`Name`,`Title of Thesis`,`Role`,`Ongoing/Completed`,`Ongoing Since`) VALUES (?,?,?,?,?,?)', [uid, MName0, MTitle0, MRole0, MOngoing0, MSince0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { BName0, BTitle0, BRole0, BOngoing0, BSince0 } = req.body;
    if (BName0 != undefined) {
        pool.query('INSERT INTO `bachelor degree` (`idUser`,`Name`,`Title of Thesis`,`Role`,`Ongoing/Completed`,`Ongoing Since`) VALUES (?,?,?,?,?,?)', [uid, BName0, BTitle0, BRole0, BOngoing0, BSince0], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }

    //
    const { PName1, PTitle1, PRole1, POngoing1, PSince1 } = req.body;
    if (PName1 != undefined) {
        pool.query('INSERT INTO `phd supervision` (`idUser`,`Name`,`Title of Thesis`,`Role`,`Ongoing/Completed`,`Ongoing Since`) VALUES (?,?,?,?,?,?)', [uid, PName1, PTitle1, PRole1, POngoing1, PSince1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { MName1, MTitle1, MRole1, MOngoing1, MSince1 } = req.body;
    if (MName1 != undefined) {
        pool.query('INSERT INTO `master degree` (`idUser`,`Name`,`Title of Thesis`,`Role`,`Ongoing/Completed`,`Ongoing Since`) VALUES (?,?,?,?,?,?)', [uid, MName1, MTitle1, MRole1, MOngoing1, MSince1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { BName1, BTitle1, BRole1, BOngoing1, BSince1 } = req.body;
    if (BName1 != undefined) {
        pool.query('INSERT INTO `bachelor degree` (`idUser`,`Name`,`Title of Thesis`,`Role`,`Ongoing/Completed`,`Ongoing Since`) VALUES (?,?,?,?,?,?)', [uid, BName1, BTitle1, BRole1, BOngoing1, BSince1], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    //
    const { PName2, PTitle2, PRole2, POngoing2, PSince2 } = req.body;
    console.log(PName2);
    if (PName2 != undefined) {
        pool.query('INSERT INTO `phd supervision` (`idUser`,`Name`,`Title of Thesis`,`Role`,`Ongoing/Completed`,`Ongoing Since`) VALUES (?,?,?,?,?,?)', [uid, PName2, PTitle2, PRole2, POngoing2, PSince2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { MName2, MTitle2, MRole2, MOngoing2, MSince2 } = req.body;
    if (MName2 != undefined) {
        pool.query('INSERT INTO `master degree` (`idUser`,`Name`,`Title of Thesis`,`Role`,`Ongoing/Completed`,`Ongoing Since`) VALUES (?,?,?,?,?,?)', [uid, MName2, MTitle2, MRole2, MOngoing2, MSince2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
    const { BName2, BTitle2, BRole2, BOngoing2, BSince2 } = req.body;
    if (BName2 != undefined) {
        pool.query('INSERT INTO `bachelor degree` (`idUser`,`Name`,`Title of Thesis`,`Role`,`Ongoing/Completed`,`Ongoing Since`) VALUES (?,?,?,?,?,?)', [uid, BName2, BTitle2, BRole2, BOngoing2, BSince2], (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        })
    }
})

app.get('/ph', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `phd supervision` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});
app.get('/u', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `bachelor degree` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});
app.get('/p', (req, res) => {
    const uid = req.query.uid;
    pool.query('SELECT * FROM `master degree` WHERE idUser = ?', [uid], (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        res.json(results);
    });
});

app.post("/pg7", (req, res) => {
    console.log(req.body);
    console.log("krr");
    // const {uid}=req.body;
    const {
        researchContri,
        teachingContri,
        relevantInfo,
        professionalService,
        loj,
        loc,
        uid
    } = req.body;
    // console.log(req.body);
    pool.query(
        "INSERT INTO `statement` (`idUser`,`Text`,`Text Name`) VALUES (?,?,?)",
        [uid, "researchContri", researchContri],
        (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        }
    );
    pool.query(
        "INSERT INTO `statement` (`idUser`,`Text`,`Text Name`) VALUES (?,?,?)",
        [uid, "teachingContri", teachingContri],
        (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        }
    );
    pool.query(
        "INSERT INTO `statement` (`idUser`,`Text`,`Text Name`) VALUES (?,?,?)",
        [uid, "relevantInfo", relevantInfo],
        (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        }
    );
    pool.query(
        "INSERT INTO `statement` (`idUser`,`Text`,`Text Name`) VALUES (?,?,?)",
        [uid, "professionalService", professionalService],
        (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        }
    );
    pool.query(
        "INSERT INTO `statement` (`idUser`,`Text`,`Text Name`) VALUES (?,?,?)",
        [uid, "loj", loj],
        (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        }
    );
    pool.query(
        "INSERT INTO `statement` (`idUser`,`Text`,`Text Name`) VALUES (?,?,?)",
        [uid, "loc", loc],
        (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        }
    );
});
app.get('/sendText/:uuid', (req, res) => {
    const uuid = req.params.uuid;
    pool.query(
        "SELECT * FROM `statement` WHERE idUser = ?",
        [uuid],
        (error, results) => {
            if (error) {
                console.log(error);
                return;
            }
            res.json(results);
        }
    );
})
const config = upload.fields([
    { name: "bestPapers", maxCount: 1 },
    { name: "phd", maxCount: 1 },
    { name: "pg", maxCount: 1 },
    { name: "ug", maxCount: 1 },
    { name: "doc12", maxCount: 1 },
    { name: "doc10", maxCount: 1 },
    { name: "paySlip", maxCount: 1 },
    { name: "noc", maxCount: 1 },
    { name: "postPhd", maxCount: 1 },
    { name: "exp", maxCount: 1 },
    { name: "sign", maxCount: 1 },
]);
app.post("/pg8", config, async (req, res) => {
    // console.log(req.files);
    // console.log(req.body);
    const { uid } = req.body;
    console.log(req.body);
    const {
        bestPapers,
        phd,
        pg,
        ug,
        doc12,
        doc10,
        paySlip,
        noc,
        postPhd,
        exp,
        sign,
    } = req.files;
    try {
        const { url: bestPapersUrl } = await cloudinary.uploader.upload(
            bestPapers[0].path,
            {
                folder: "DBMS_project",
                resource_type: "auto",
            }
        );
        // fs.unlinkSync(bestPapers[0].path);
        const { url: phdUrl } = await cloudinary.uploader.upload(phd[0].path, {
            folder: "DBMS_project",
            resource_type: "auto",
        });
        // fs.unlinkSync(phd[0].path);
        const { url: pgUrl } = await cloudinary.uploader.upload(pg[0].path, {
            folder: "DBMS_project",
            resource_type: "auto",
        });
        // fs.unlinkSync(pg[0].path);
        const { url: ugUrl } = await cloudinary.uploader.upload(ug[0].path, {
            folder: "DBMS_project",
            resource_type: "auto",
        });
        // fs.unlinkSync(ug[0].path);
        const { url: doc12Url } = await cloudinary.uploader.upload(doc12[0].path, {
            folder: "DBMS_project",
            resource_type: "auto",
        });
        // fs.unlinkSync(doc12[0].path);
        const { url: doc10Url } = await cloudinary.uploader.upload(doc10[0].path, {
            folder: "DBMS_project",
            resource_type: "auto",
        });
        // fs.unlinkSync(doc10[0].path);
        const { url: paySlipUrl } = await cloudinary.uploader.upload(
            paySlip[0].path,
            {
                folder: "DBMS_project",
                resource_type: "auto",
            }
        );
        // fs.unlinkSync(paySlip[0].path);
        const { url: nocUrl } = await cloudinary.uploader.upload(noc[0].path, {
            folder: "DBMS_project",
            resource_type: "auto",
        });
        // fs.unlinkSync(noc[0].path);
        const { url: postPhdUrl } = await cloudinary.uploader.upload(
            postPhd[0].path,
            {
                folder: "DBMS_project",
                resource_type: "auto",
            }
        );
        // fs.unlinkSync(postPhd[0].path);
        const { url: expUrl } = await cloudinary.uploader.upload(exp[0].path, {
            folder: "DBMS_project",
            resource_type: "auto",
        });
        // fs.unlinkSync(exp[0].path);
        const { url: signUrl } = await cloudinary.uploader.upload(sign[0].path, {
            folder: "DBMS_project",
            resource_type: "auto",
        });
        fs.unlinkSync(sign[0].path);
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, bestPapers[0].fieldname, bestPapersUrl],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, phd[0].fieldname, phdUrl],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, pg[0].fieldname, pgUrl],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, ug[0].fieldname, ugUrl],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, doc12[0].fieldname, doc12Url],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, doc10[0].fieldname, doc10Url],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, paySlip[0].fieldname, paySlipUrl],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, noc[0].fieldname, nocUrl],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, postPhd[0].fieldname, postPhdUrl],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, exp[0].fieldname, expUrl],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );

        pool.query(
            "INSERT INTO documents (idUser,`File Name`,`File Link`) VALUES (?,?,?)",
            [uid, sign[0].fieldname, signUrl],
            (error) => {
                if (error) {
                    console.error("Error inserting data: ", error);
                    res.status(500).send("Error inserting data");
                }
            }
        );
        res.send("Data Uploaded Successfully");
    } catch (error) {
        // res.status(500).send("Error Uploading Files");
    }
    const {
        name1,
        position1,
        association1,
        institution1,
        email1,
        contact1,
        name2,
        position2,
        association2,
        institution2,
        email2,
        contact2,
        name3,
        position3,
        association3,
        institution3,
        email3,
        contact3,
    } = req.body;
    pool.query(
        "INSERT INTO referees (`idUser`,`Name`,`Position`,`Association`,`Institution`,`Email`,`Contact No.`) VALUES (?,?,?,?,?,?,?)",
        [uid, name1, position1, association1, institution1, email1, contact1],
        (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        }
    );
    pool.query(
        "INSERT INTO referees (`idUser`,`Name`,`Position`,`Association`,`Institution`,`Email`,`Contact No.`) VALUES (?,?,?,?,?,?,?)",
        [uid, name2, position2, association2, institution2, email2, contact2],
        (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        }
    );
    pool.query(
        "INSERT INTO referees (`idUser`,`Name`,`Position`,`Association`,`Institution`,`Email`,`Contact No.`) VALUES (?,?,?,?,?,?,?)",
        [uid, name3, position3, association3, institution3, email3, contact3],
        (error) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
            }
        }
    );
});
app.get("/getfiles/:uuid", (req, res) => {
    const uuid = req.params.uuid
    pool.query(
        "SELECT * FROM `documents` WHERE idUser = ?",
        [uuid],
        (error, results) => {
            if (error) {
                console.log(error);
                return;
            }
            res.json(results);
        }
    );
});
app.get("referals/:uuid", (req, res) => {
    const uuid = req.params.uuid
    pool.query(
        "SELECT * FROM `referees` WHERE idUser = ?",
        [uuid],
        (error, results) => {
            if (error) {
                console.log(error);
                return;
            }
            res.json(results);
        }
    );
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
