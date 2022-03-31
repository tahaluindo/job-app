import { Error_Messages_Standardization } from '../../Global'

export const Database_Role = [
    'Admin',
    'User',
    'HeadDepartemen',
    'Departemen',
    'HeadHR',
    'HR'
]

const Database_Account = [
    {
        UserName: '1',
        Role: Database_Role[0],
        Password: '123',
        BiodataId: '1'
    },
    {
        UserName: '2',
        Role: Database_Role[1],
        Password: '123',
        BiodataId: '2'
    },
    {
        UserName: '3',
        Role: Database_Role[1],
        Password: '123',
        BiodataId: '3'
    },
    {
        UserName: '4',
        Role: Database_Role[2],
        Password: '123',
        BiodataId: '4'
    },
    {
        UserName: '5',
        Role: Database_Role[3],
        Password: '123',
        BiodataId: '5'
    },
    {
        UserName: '6',
        Role: Database_Role[4],
        Password: '123',
        BiodataId: '6'
    },
    {
        UserName: '7',
        Role: Database_Role[5],
        Password: '123',
        BiodataId: '7'
    },
    // {
    //     UserName: '8',
    //     Role: 'HR',
    //     Password: '123',
    //     BiodataId: '8'
    // },
    // {
    //     UserName: '9',
    //     Role: 'HR',
    //     Password: '123',
    //     BiodataId: '9'
    // },
    // {
    //     UserName: '10',
    //     Role: 'HR',
    //     Password: '123',
    //     BiodataId: '10'
    // }
]

// const Database_Biodata = [
//     {
//         UserName: '1',
//         BiodataId: '1',
//         Nama: '1',
//         TempatLahir: '1',
//         TanggalLahir: '',
//         Alamat: '',
//         AlamatKTP: '',
//         TeleponRumah: '',
//         TeleponKantor: '',
//         TeleponSeluler: '',
//         GolonganDarah: '',
//         Agama: '',
//         JenisKelamin: '',
//         Tinggi: '',
//         BeratBadan: '',
//         StatusPerkawinan: '',
//         KTP: '',
//         Foto: ''
//     },
//     {
//         UserName: '2',
//         BiodataId: '2',
//         Nama: '2',
//         TempatLahir: '2',
//         TanggalLahir: '',
//         Alamat: '',
//         AlamatKTP: '',
//         TeleponRumah: '',
//         TeleponKantor: '',
//         TeleponSeluler: '',
//         GolonganDarah: '',
//         Agama: '',
//         JenisKelamin: '',
//         Tinggi: '',
//         BeratBadan: '',
//         StatusPerkawinan: '',
//         KTP: '',
//         Foto: ''
//     },
//     {
//         UserName: '3',
//         BiodataId: '3',
//         Nama: '3',
//         TempatLahir: '3',
//         TanggalLahir: '',
//         Alamat: '',
//         AlamatKTP: '',
//         TeleponRumah: '',
//         TeleponKantor: '',
//         TeleponSeluler: '',
//         GolonganDarah: '',
//         Agama: '',
//         JenisKelamin: '',
//         Tinggi: '',
//         BeratBadan: '',
//         StatusPerkawinan: '',
//         KTP: '',
//         Foto: ''
//     },
//     {
//         UserName: '4',
//         BiodataId: '4',
//         Nama: '4',
//         TempatLahir: '4',
//         TanggalLahir: '',
//         Alamat: '',
//         AlamatKTP: '',
//         TeleponRumah: '',
//         TeleponKantor: '',
//         TeleponSeluler: '',
//         GolonganDarah: '',
//         Agama: '',
//         JenisKelamin: '',
//         Tinggi: '',
//         BeratBadan: '',
//         StatusPerkawinan: '',
//         KTP: '',
//         Foto: ''
//     },
//     {
//         UserName: '5',
//         BiodataId: '5',
//         Nama: '5',
//         TempatLahir: '5',
//         TanggalLahir: '',
//         Alamat: '',
//         AlamatKTP: '',
//         TeleponRumah: '',
//         TeleponKantor: '',
//         TeleponSeluler: '',
//         GolonganDarah: '',
//         Agama: '',
//         JenisKelamin: '',
//         Tinggi: '',
//         BeratBadan: '',
//         StatusPerkawinan: '',
//         KTP: '',
//         Foto: ''
//     },
//     {
//         UserName: '6',
//         BiodataId: '6',
//         Nama: '6',
//         TempatLahir: '6',
//         TanggalLahir: '',
//         Alamat: '',
//         AlamatKTP: '',
//         TeleponRumah: '',
//         TeleponKantor: '',
//         TeleponSeluler: '',
//         GolonganDarah: '',
//         Agama: '',
//         JenisKelamin: '',
//         Tinggi: '',
//         BeratBadan: '',
//         StatusPerkawinan: '',
//         KTP: '',
//         Foto: ''
//     },
//     {
//         UserName: '7',
//         BiodataId: '7',
//         Nama: '7',
//         TempatLahir: '7',
//         TanggalLahir: '',
//         Alamat: '',
//         AlamatKTP: '',
//         TeleponRumah: '',
//         TeleponKantor: '',
//         TeleponSeluler: '',
//         GolonganDarah: '',
//         Agama: '',
//         JenisKelamin: '',
//         Tinggi: '',
//         BeratBadan: '',
//         StatusPerkawinan: '',
//         KTP: '',
//         Foto: ''
//     },
//     // {
//     //     UserName: '8',
//     //     BiodataId: '8',
//     // Nama:'8',
//     // TempatLahir:'8',
//     // TanggalLahir:'',
//     // Alamat:'',
//     // AlamatKTP:'',
//     // TeleponRumah:'',
//     // TeleponKantor:'',
//     // TeleponSeluler:'',
//     // GolonganDarah:'',
//     // Agama:'',
//     // JenisKelamin:'',
//     // Tinggi:'',
//     // BeratBadan:'',
//     // StatusPerkawinan:'',
//     // KTP:'',
//     // Foto:''
//     // },
//     // {
//     //     UserName: '9',
//     //     BiodataId: '9',
//     // Nama: '9',
//     // TempatLahir: '9',
//     // TanggalLahir: '',
//     // Alamat: '',
//     // AlamatKTP: '',
//     // TeleponRumah: '',
//     // TeleponKantor: '',
//     // TeleponSeluler: '',
//     // GolonganDarah: '',
//     // Agama: '',
//     // JenisKelamin: '',
//     // Tinggi: '',
//     // BeratBadan: '',
//     // StatusPerkawinan: '',
//     // KTP: '',
//     // Foto: ''
//     // },
//     // {
//     //     UserName: '10',
//     //     BiodataId: '10',
//     // Nama: '0',
//     // TempatLahir: '0',
//     // TanggalLahir: '',
//     // Alamat: '',
//     // AlamatKTP: '',
//     // TeleponRumah: '',
//     // TeleponKantor: '',
//     // TeleponSeluler: '',
//     // GolonganDarah: '',
//     // Agama: '',
//     // JenisKelamin: '',
//     // Tinggi: '',
//     // BeratBadan: '',
//     // StatusPerkawinan: '',
//     // KTP: '',
//     // Foto: ''
//     // }
// ]

export const Database_Log_In = async (UserName, Password) => {
    try {
        if (!UserName || !Password) {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak lengkap')
            throw ErrorResponse
        }

        const IndexUserNameExist = Database_Account.findIndex((item) => item.UserName === UserName)

        if (IndexUserNameExist >= 0) {
            const CorrectPassword = Database_Account[IndexUserNameExist].Password
            if (Password !== CorrectPassword) {
                const ErrorResponse = Error_Messages_Standardization(400, 'Password Salah')
                throw ErrorResponse
            }
            const User = Database_Account[IndexUserNameExist]
            return User
        }

    } catch (err) {
        console.log(err)
    }
}


export const Database_Load_User = async (UserName) => {
    try {
        if (!UserName) {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ada')
            throw ErrorResponse
        }
        const UserData = Database_Account.find((item) => item.UserName === UserName)
        if (!UserData) {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ada')
            throw ErrorResponse
        }
        return UserData
    } catch (err) {
        console.log(err)
    }
}

export const Database_Load_Biodata = async (BiodataId) => {
    try {
        if (!BiodataId) {
            const ErrorResponse = Error_Messages_Standardization(400, 'BiodataId tidak ada')
            throw ErrorResponse
        }
        const BiodataData = Database_Biodata.find((item) => item.BiodataId === BiodataId)
        if (!BiodataData) {
            const ErrorResponse = Error_Messages_Standardization(400, 'BiodataData tidak ada')
            throw ErrorResponse
        }
        return BiodataData
    } catch (err) {
        console.log(err)
    }
}

const Database_JobList = [
    {
        Title: "Operations - Shopee Express, Hub Lead (Batang)",
        Departemen: "Operations",
        Tingkat: "Manager",
        Lokasi: "Indonesia - Yogyakarta"
    },
    {
        Title: "Legal and Finance - Accounting (Logistic)",
        Departemen: "Legal and Finance",
        Tingkat: "Experienced",
        Lokasi: "Indonesia - Jakarta"
    },
    {
        Title: "Shopee Express - Budgeting and Planning, Financial Planning and Analysis (FP&A)",
        Departemen: "Legal and Finance",
        Tingkat: "Experienced",
        Lokasi: "Indonesia - Jakarta"
    },
    {
        Title: "Business Development and Partnership - Campaign Management Project",
        Departemen: "Business Development and Partnerships",
        Tingkat: "Experienced",
        Lokasi: "Indonesia - Jakarta"
    },
    {
        Title: "Search Quality Assurance Engineer",
        Departemen: "Data Science",
        Tingkat: "Experienced",
        Lokasi: "Singapura"
    },
]

export const Database_Load_Job_List = async () => {
    try {
        const JobList = Database_JobList
        if (!JobList) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobList tidak ada')
            throw ErrorResponse
        }
        return JobList
    } catch (err) {
        console.log(err)
    }
}

// export const Database_Load_Job_Detail = async () => {
//     try {
//         return null
//     } catch (err) {
//         console.log(err)
//     }
// }

export const Database_Load_Job_Apply = async () => {
    try {
        const JobApply = [Database_JobList[0], Database_JobList[1], Database_JobList[2]]
        if (!JobApply) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobApply tidak ada')
            throw ErrorResponse
        }
        return JobApply
    } catch (err) {
        console.log(err)
    }
}

export const Database_Load_Job_Save = async () => {
    try {
        const JobSave = [Database_JobList[3], Database_JobList[4]]
        if (!JobSave) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobSave tidak ada')
            throw ErrorResponse
        }
        return JobSave
    } catch (err) {
        console.log(err)
    }
}

const Database_Biodata = [
    {
        Foto: null,
        NamaLengkap: 'contoh',
        TempatLahir: 'jakarta',
        TanggalLahir: '12/12/12',
        AlamatTinggal: 'bekasi',
        AlamatKTP: 'jakarta',
        TlpRumah: '01213121231',
        TlpKantor: '0124123123',
        TlpSeluler: '124123',
        GolonganDarah: 'O',
        Agama: 'Lainnya',
        JenisKelamin: 'contoh',
        Tinggi: '180',
        Berat: '90',
        StatusPerkawinan: 'kawin',
        NoKTP: '1234123',
        Hobi: 'Hobi',
        SIM: 'A/B',
        SimExp: '12/12/12',
        Kendaraan: 'Mobil',
        Milik: 'Kantor'
    },
]

const Database_Pendidikan = [
    [
        {
            Formal: [
                {
                    Nama: 'S1 UI',
                    Alamat: 'Depok',
                    Jurusan: 'IPS',
                    TahunMulai: 2015,
                    TahunSelesai: 2020,
                },
                {
                    Nama: 'S2 UI',
                    Alamat: 'Depok',
                    Jurusan: 'IPA',
                    TahunMulai: 2022,
                    TahunSelesai: 2025,
                }
            ],
            NonFormal: [
                {
                    Nama: 'Cisoc',
                    Durasi: '12 Bulan',
                    Keterangan: 'Pelatihan Cisco dari pemerintahan indonesia yang berlokasi di singapore'
                }
            ]
        },
    ],
]
const Database_Keterampilan = [
    [
        {
            Bahasa: [
                {
                    Bahasa: 'Indonesia',
                    Penguasaan: 'Sangat',
                    Catatan: '',
                },
                {
                    Bahasa: 'Igris',
                    Penguasaan: 'Sangat',
                    Catatan: 'TOFL 900',
                },
                {
                    Bahasa: 'Arab',
                    Penguasaan: 'Kurang',
                    Catatan: '',
                },
            ],
            Komputer: [
                {
                    Komputer: 'Microsoft Office',
                    Penguasaan: 'Cukup',
                    Catatan: 'Pernah Ikut Pelatihan Privat '
                }
            ],
            Relevan: [
                {
                    Relevan: 'Akutansi',
                    Penguasaan: 'Baik',
                    Catatan: 'S1 Akuntansi'
                }
            ]
        },
    ],
]
const Database_Keluarga = [
    [
        {
            Nama: 'Ayah',
            JenisKelamin: 'Laki',
            Usia: 40,
            Pendidikan: 'S3',
            Pekerjaan: 'PNS',
            Perusahaan: 'PNS Bogor'
        },
        {
            Nama: 'Ibu',
            JenisKelamin: 'Perempuan',
            Usia: 36,
            Pendidikan: 'S3',
            Pekerjaan: 'PNS',
            Perusahaan: 'PNS Depok'
        },
    ],
]
const Database_Riwayat_Kerja = [
    [
        {
            RiwayatKerja: [
                {
                    Tahun: 2,
                    Nama: 'PT Senang Bersama',
                    Jabatan: 'Manager IT',
                    Atasan: 'Andi',
                    Gaji: '10000000',
                    Alasan: 'Perushaan Tutup',
                },
            ],
            UraianTugas: 'Contoh Uraian Tugas Pada Riwayat Pekerjaan',
            Struktur: 'Contoh Struktur Organisasi Pada Riwayat Pekerjaan',
            Referensi: [
                {
                    Sumber: 'Kolega',
                    Nama: 'Andre',
                    Kontak: '0812655676, Bekasi',
                    Keterangan: 'Satu Proyek',
                },
                {
                    Sumber: 'Manager',
                    Nama: 'Andi',
                    Kontak: '08126576876, Bekasi',
                    Keterangan: 'Kepala Proyek',
                }
            ]
        },
    ],
]
const Database_Pertanyaan = [
    {
        Pertanyaan: 'Apakah anda pernah bekerja di group/perusahaan ini sebelumnya?Bila Ya, kapan dan di posisi apa ?',
        Jawaban: false,
        Penjelasan: '',
    },
    {
        Pertanyaan: 'Apakah anda mempunyai teman/saudara  yg bekerja di grup/perusahaan ini?',
        Jawaban: true,
        Penjelasan: '',
    },
    {
        Pertanyaan: 'Selain di perusahaan ini, dimana lagi anda melamar ? dan sebagai apa ? ',
        Jawaban: true,
        Penjelasan: 'PNS, IT',
    },
    {
        Pertanyaan: 'Apakah anda terikat kontrak di perusahaan saat ini? ',
        Jawaban: true,
        Penjelasan: '',
    },
    {
        Pertanyaan: 'Apakah anda mempunyai pekerjaan sampingan? ',
        Jawaban: false,
        Penjelasan: '',
    },
    {
        Pertanyaan: 'Dapatkah kami meminta referensi dari perusahaan anda saat ini? ',
        Jawaban: false,
        Penjelasan: '',
    },
    {
        Pertanyaan: 'Apakah anda pernah menderita sakit keras,kecelakaan/melakukan operasi? ',
        Jawaban: true,
        Penjelasan: '',
    },
    {
        Pertanyaan: 'Apakah anda pernah menjalani pemeriksaan  psikologis,dimana dan untuk keperluan apa?',
        Jawaban: false,
        Penjelasan: '',
    },
    {
        Pertanyaan: 'Apakah anda pernah berhubungan  dgn kepolisian karena tindakan kejahatan? ',
        Jawaban: false,
        Penjelasan: '',
    },
    {
        Pertanyaan: 'Apakah anda bersedia ditugaskan keluar kota Jakarta?',
        Jawaban: true,
        Penjelasan: '',
    },
    {
        Pertanyaan: 'Jenis pekerjaan apa yang anda tidak sukai? ',
        // Jawaban: false,
        Penjelasan: 'Tidak ada',
    },
    {
        Pertanyaan: 'Jenis pekerjaan apa yang anda sukai? ',
        // Jawaban: false,
        Penjelasan: 'Semuanya',
    },
    {
        Pertanyaan: 'Berapa penghasilan & fasilitas apa yang anda terima saat ini?  ',
        // Jawaban: false,
        Penjelasan: '10000000, semuanya',
    },
    {
        Pertanyaan: 'Berapa penghasilan & fasilitas apa yang anda harapkan?  ',
        // Jawaban: false,
        Penjelasan: '10000000, semuanya',
    },
    {
        Pertanyaan: 'Kapankah anda siap untuk bekerja di perusahaan ini? ',
        // Jawaban: false,
        Penjelasan: 'Secepatnya',
    },

]
export const Database_Load_Account_Data = async () => {
    try {
        const Data = Database_Account[0]
        if (!Data) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobSave tidak ada')
            throw ErrorResponse
        }
        return Data
    } catch (err) {
        console.log(err)
    }
}

export const Database_Load_Biodata_Data = async () => {
    try {
        const Data = Database_Biodata[0]
        if (!Data) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobSave tidak ada')
            throw ErrorResponse
        }
        return Data
    } catch (err) {
        console.log(err)
    }
}

export const Database_Load_Pendidikan_Data = async () => {
    try {
        const Data = Database_Pendidikan[0]
        if (!Data) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobSave tidak ada')
            throw ErrorResponse
        }
        return Data
    } catch (err) {
        console.log(err)
    }
}

export const Database_Load_Keterampilan_Data = async () => {
    try {
        const Data = Database_Keterampilan[0]
        if (!Data) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobSave tidak ada')
            throw ErrorResponse
        }
        return Data
    } catch (err) {
        console.log(err)
    }
}

export const Database_Load_Keluarga_Data = async () => {
    try {
        const Data = Database_Keluarga[0]
        if (!Data) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobSave tidak ada')
            throw ErrorResponse
        }
        return Data
    } catch (err) {
        console.log(err)
    }
}

export const Database_Load_Riwayat_Kerja_Data = async () => {
    try {
        const Data = Database_Riwayat_Kerja[0]
        if (!Data) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobSave tidak ada')
            throw ErrorResponse
        }
        return Data
    } catch (err) {
        console.log(err)
    }
}

export const Database_Load_Pertanyaan = async () => {
    try {
        const Data = Database_Pertanyaan
        if (!Data) {
            const ErrorResponse = Error_Messages_Standardization(400, 'JobSave tidak ada')
            throw ErrorResponse
        }
        return Data
    } catch (err) {
        console.log(err)
    }
}