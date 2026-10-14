/**
 * Mobile Second - Sistem Multi Bahasa (Indonesian & English)
 * Mendukung pergantian bahasa instan (ID / EN) di seluruh halaman showroom
 * Tersimpan otomatis di localStorage sehingga konsisten saat berpindah halaman.
 */

const MobileSecondI18n = (function() {
    // Kamus Lengkap Bahasa (Indonesian <-> English)
    const DICTIONARY = {
        id: {
            // Navbar & Brand
            "brand_tagline": "Jual Beli Mobil Bekas",
            "nav_buy": "Beli Mobil",
            "nav_sell": "Jual Mobil",
            "nav_promo": "Promo",
            "nav_about": "Tentang Kami",
            "nav_loan": "Simulasi Kredit",
            "hot_badge": "PROMO",
            "wa_sales": "0812-0000-0000",
            "contact_sales_wa": "Hubungi WhatsApp Sales",

            // Search Hero
            "search_placeholder": "Cari mobil impian Anda (mis. Avanza, HR-V, Innova, Brio)...",
            "quick_filters": "Filter Cepat",
            "sort_label": "Urutkan",
            "sort_recommendation": "Rekomendasi Terbaik",
            "sort_price_low": "Harga: Terendah ke Tertinggi",
            "sort_price_high": "Harga: Tertinggi ke Terendah",
            "sort_year_new": "Tahun: Paling Baru",
            "sort_km_low": "Kilometer: Terendah",

            // Quick Categories Pill
            "cat_label": "Kategori Cepat:",
            "cat_all": "Semua Mobil",
            "cat_under100": "< 100 Juta",
            "cat_100_200": "100 - 200 Juta",
            "cat_200_350": "200 - 350 Juta",
            "cat_luxury": "350 Juta+ (Mewah)",
            "cat_suv": "SUV & Crossover",
            "cat_mpv": "MPV 7 Penumpang",
            "cat_city": "Mobil Perkotaan",
            "cat_ev": "Mobil Listrik (EV)",

            // Value Props Bar
            "usp_owner": "Showroom Dealer Resmi (1 Pemilik Tunggal)",
            "usp_stock": "100% Stok Milik Showroom Sendiri (Bukan Perantara)",
            "usp_warranty": "Garansi Resmi Showroom 1 Tahun",
            "usp_buyback": "Kami Siap Beli Mobil Anda Tunai di Tempat",

            // Sidebar Filter
            "filter_title": "Filter Mobil",
            "filter_reset": "Reset",
            "filter_brand_title": "Pilihan Merek (19 Merek)",
            "filter_brand_search": "Cari merek mobil...",
            "filter_brand_all": "Semua Merek",
            "filter_price_title": "Rentang Harga (Rp)",
            "filter_year_title": "Tahun Pembuatan",
            "filter_body_title": "Tipe Bodi Kendaraan",
            "filter_trans_title": "Transmisi",
            "filter_trans_all": "Semua Transmisi",
            "filter_trans_manual": "Manual Saja",
            "filter_trans_auto": "Otomatis (Matic)",
            "filter_color_title": "Pilihan Warna",
            "filter_color_all": "Semua Warna",
            "color_white": "Putih",
            "color_black": "Hitam",
            "color_silver": "Silver / Abu",
            "color_red": "Merah",
            "color_other": "Lainnya",
            "filter_city_title": "Lokasi Showroom",
            "filter_city_all": "Semua Cabang Jabodetabek",
            "filter_warranty_only": "Hanya Unit Bergaransi Resmi 1 Tahun",

            // Stock Header & Status
            "stock_title": "Stok Resmi Showroom Kami:",
            "showing_text": "Menampilkan",
            "from_text": "dari",
            "unit_ready": "unit siap pakai",
            "badge_official": "100% Aset Resmi Showroom",
            "badge_testdrive": "Siap Uji Kemudi Hari Ini",

            // Card Badges & Info
            "badge_warranty": "Garansi",
            "badge_inspected": "Lulus Inspeksi",
            "btn_detail": "Lihat Detail",
            "card_km": "km",
            "card_trans_manual": "Manual",
            "card_trans_auto": "Otomatis",

            // Empty State
            "no_result_title": "Tidak ada mobil yang cocok dengan filter",
            "no_result_desc": "Silakan atur ulang rentang harga atau pilih kategori bodi lain untuk menemukan unit yang tersedia.",
            "btn_reset_all": "Reset Semua Filter",

            // Jual Mobil Page
            "sell_hero_badge": "Layanan Jual & Tukar Tambah Resmi",
            "sell_hero_title": "Jual & Tukar Tambah Mobil Bekas Anda dengan Harga Terbaik & Dana Cair 1 Jam",
            "sell_hero_desc": "Proses transparan, tanpa perantara, inspeksi gratis langsung di showroom atau ke rumah Anda.",
            "form_title": "Formulir Penilaian Mobil Cepat",
            "form_brand": "Merek Mobil",
            "form_model": "Model & Varian",
            "form_year": "Tahun Pembuatan",
            "form_trans": "Transmisi",
            "form_mileage": "Jarak Tempuh / Kilometer",
            "form_color": "Warna Kendaraan",
            "form_city": "Kota Domisili",
            "form_phone": "Nomor WhatsApp Pemilik",
            "form_btn_estimate": "Dapatkan Estimasi Harga Sekarang",
            "step_title": "4 Langkah Mudah Menjual Mobil",

            // Promo Page
            "promo_hero_badge": "Program Promo Resmi Showroom",
            "promo_hero_title": "Promo Spesial & Penawaran Terbatas Bulan Ini",
            "promo_hero_desc": "Beli mobil bekas impian kini lebih hemat dengan berbagai kemudahan bunga rendah, garansi servis, dan subsidi tukar tambah.",
            "promo_valid_until": "Berlaku hingga akhir bulan",
            "btn_claim_promo": "Klaim Promo Ini",

            // Simulasi Kredit Page
            "loan_hero_badge": "Kalkulator Kredit Resmi",
            "loan_hero_title": "Simulasi Angsuran & Cicilan Mobil Bekas Ringan",
            "loan_hero_desc": "Hitung estimasi Down Payment (DP) dan cicilan bulanan yang sesuai dengan anggaran keuangan Anda secara transparan.",
            "loan_car_price": "Harga Mobil (Rp)",
            "loan_dp_percent": "Uang Muka / DP (%)",
            "loan_tenor": "Jangka Waktu Kredit (Tenor)",
            "loan_result_title": "Estimasi Cicilan Bulanan",
            "loan_tdp_title": "Total Pembayaran Pertama (TDP)",
            "loan_apply_btn": "Ajukan Simulasi via WhatsApp",

            // Tentang Kami Page
            "about_hero_badge": "Profil Resmi Showroom",
            "about_hero_title": "Standar Baru Showroom Mobil Bekas Berkualitas, Transparan & Terpercaya",
            "about_hero_desc": "Menghadirkan rasa aman dan kepastian dalam setiap kepemilikan mobil bekas berkualitas dengan standar inspeksi 160 titik independen.",
            "about_inspection_title": "Standar Inspeksi 160 Titik Mobile Second",
            "about_branches_title": "Jaringan Showroom Resmi di Jabodetabek",

            // Detail Page
            "detail_badge_ready": "Unit Siap Pakai di Showroom",
            "detail_cash_price": "Harga Tunai (Cash)",
            "detail_credit_est": "Estimasi Kredit / Cicilan",
            "detail_spec_title": "Spesifikasi Kendaraan",
            "detail_features_title": "Fitur & Kelengkapan",
            "detail_inspection_report": "Laporan Ringkasan Inspeksi 160 Titik",
            "detail_btn_testdrive": "Jadwalkan Uji Kemudi (Test Drive)",
            "detail_btn_wa": "Tanya Unit via WhatsApp",

            // Footer
            "footer_about_text": "Showroom resmi jual beli mobil bekas berkualitas dengan sertifikasi inspeksi 160 titik independen, garansi 1 tahun, dan layanan tukar tambah transparan.",
            "footer_quick_links": "Menu Navigasi",
            "footer_services": "Layanan Showroom",
            "footer_contact": "Kontak & Alamat Showroom",
            "footer_address": "Alamat Showroom (Contoh): Jl. Otomotif Raya No. 88, Kawasan Niaga Barat, Jakarta",
            "footer_copyright": "© 2026 Mobile Second. Hak Cipta Dilindungi Undang-Undang. Showroom Resmi Jual Beli Mobil Bekas."
        },
        en: {
            // Navbar & Brand
            "brand_tagline": "Quality Used Car Dealership",
            "nav_buy": "Buy Car",
            "nav_sell": "Sell Car",
            "nav_promo": "Promotions",
            "nav_about": "About Us",
            "nav_loan": "Loan Calculator",
            "hot_badge": "SPECIAL",
            "wa_sales": "0812-0000-0000",
            "contact_sales_wa": "Contact Sales on WhatsApp",

            // Search Hero
            "search_placeholder": "Search your dream car (e.g. Avanza, HR-V, Innova, Brio)...",
            "quick_filters": "Quick Filters",
            "sort_label": "Sort By",
            "sort_recommendation": "Best Recommendations",
            "sort_price_low": "Price: Low to High",
            "sort_price_high": "Price: High to Low",
            "sort_year_new": "Year: Newest",
            "sort_km_low": "Mileage: Lowest",

            // Quick Categories Pill
            "cat_label": "Quick Categories:",
            "cat_all": "All Cars",
            "cat_under100": "< 100 Million",
            "cat_100_200": "100 - 200 Million",
            "cat_200_350": "200 - 350 Million",
            "cat_luxury": "350M+ (Luxury)",
            "cat_suv": "SUV & Crossover",
            "cat_mpv": "7-Seater MPV",
            "cat_city": "City Cars",
            "cat_ev": "Electric Vehicles (EV)",

            // Value Props Bar
            "usp_owner": "Official Dealer Showroom (Single Ownership)",
            "usp_stock": "100% Owned Showroom Stock (No Middlemen)",
            "usp_warranty": "1-Year Official Showroom Warranty",
            "usp_buyback": "We Buy Your Car with Immediate Cash Payment",

            // Sidebar Filter
            "filter_title": "Car Filters",
            "filter_reset": "Reset",
            "filter_brand_title": "Brand Selection (19 Brands)",
            "filter_brand_search": "Search car brands...",
            "filter_brand_all": "All Brands",
            "filter_price_title": "Price Range (IDR)",
            "filter_year_title": "Manufacturing Year",
            "filter_body_title": "Body Type",
            "filter_trans_title": "Transmission",
            "filter_trans_all": "All Transmissions",
            "filter_trans_manual": "Manual Only",
            "filter_trans_auto": "Automatic Only",
            "filter_color_title": "Color Options",
            "filter_color_all": "All Colors",
            "color_white": "White",
            "color_black": "Black",
            "color_silver": "Silver / Grey",
            "color_red": "Red",
            "color_other": "Others",
            "filter_city_title": "Showroom Branch",
            "filter_city_all": "All Greater Jakarta Branches",
            "filter_warranty_only": "1-Year Official Warranty Only",

            // Stock Header & Status
            "stock_title": "Our Official Showroom Inventory:",
            "showing_text": "Showing",
            "from_text": "of",
            "unit_ready": "ready vehicles",
            "badge_official": "100% Official Showroom Inventory",
            "badge_testdrive": "Ready for Test Drive Today",

            // Card Badges & Info
            "badge_warranty": "Warranty",
            "badge_inspected": "Inspected",
            "btn_detail": "View Details",
            "card_km": "km",
            "card_trans_manual": "Manual",
            "card_trans_auto": "Automatic",

            // Empty State
            "no_result_title": "No cars match your selected filters",
            "no_result_desc": "Please adjust price range sliders or choose another category to view available units.",
            "btn_reset_all": "Reset All Filters",

            // Jual Mobil Page
            "sell_hero_badge": "Official Car Selling & Trade-In Service",
            "sell_hero_title": "Sell & Trade-In Your Used Car at the Best Price & 1-Hour Payout",
            "sell_hero_desc": "Transparent process, zero intermediaries, free inspection at showroom or at your doorstep.",
            "form_title": "Instant Car Valuation Form",
            "form_brand": "Car Brand",
            "form_model": "Model & Variant",
            "form_year": "Manufacturing Year",
            "form_trans": "Transmission",
            "form_mileage": "Current Mileage (km)",
            "form_color": "Vehicle Color",
            "form_city": "City of Residence",
            "form_phone": "Owner's WhatsApp Number",
            "form_btn_estimate": "Get Price Estimate Now",
            "step_title": "4 Simple Steps to Sell Your Car",

            // Promo Page
            "promo_hero_badge": "Official Showroom Promotional Program",
            "promo_hero_title": "Special Promotions & Limited Offers This Month",
            "promo_hero_desc": "Owning your dream car is now more affordable with low interest rates, free maintenance warranties, and trade-in bonuses.",
            "promo_valid_until": "Valid until end of month",
            "btn_claim_promo": "Claim This Promo",

            // Simulasi Kredit Page
            "loan_hero_badge": "Official Loan Calculator",
            "loan_hero_title": "Low-Installment Used Car Financing Simulation",
            "loan_hero_desc": "Calculate your estimated Down Payment (DP) and monthly installments tailored to your budget with total transparency.",
            "loan_car_price": "Car Price (IDR)",
            "loan_dp_percent": "Down Payment / DP (%)",
            "loan_tenor": "Financing Term (Months)",
            "loan_result_title": "Estimated Monthly Installment",
            "loan_tdp_title": "Total Initial Payment (TDP)",
            "loan_apply_btn": "Apply Simulation via WhatsApp",

            // Tentang Kami Page
            "about_hero_badge": "Showroom Profile",
            "about_hero_title": "A New Benchmark for Quality, Transparent & Guaranteed Used Cars",
            "about_hero_desc": "Delivering peace of mind and certainty in every vehicle ownership backed by 160-point independent digital inspections.",
            "about_inspection_title": "Mobile Second 160-Point Inspection Standards",
            "about_branches_title": "Official Showroom Network across Greater Jakarta",

            // Detail Page
            "detail_badge_ready": "Available Unit at Showroom",
            "detail_cash_price": "Cash Price",
            "detail_credit_est": "Estimated Monthly Loan",
            "detail_spec_title": "Vehicle Specifications",
            "detail_features_title": "Features & Equipment",
            "detail_inspection_report": "160-Point Digital Inspection Summary",
            "detail_btn_testdrive": "Book a Test Drive",
            "detail_btn_wa": "Inquire via WhatsApp",

            // Footer
            "footer_about_text": "Official quality used car dealership featuring 160-point digital inspection certification, 1-year warranty, and transparent trade-in services.",
            "footer_quick_links": "Quick Links",
            "footer_services": "Our Services",
            "footer_contact": "Contact & Showroom Address",
            "footer_address": "Showroom Address (Example): Jl. Otomotif Raya No. 88, West Commercial District, Jakarta",
            "footer_copyright": "© 2026 Mobile Second. All Rights Reserved. Official Quality Used Car Dealership."
        }
    };

    // Mapping kalimat langsung dari bahasa Indonesia ke bahasa Inggris
    // Untuk menerjemahkan teks elemen yang tidak diberi data-i18n secara otomatis
    const DIRECT_PHRASES = [
        // Navigasi & Header
        { id: "Jual Beli Mobil Bekas", en: "Quality Used Car Dealership" },
        { id: "Beli Mobil", en: "Buy Car" },
        { id: "Jual Mobil", en: "Sell Car" },
        { id: "Tentang Kami", en: "About Us" },
        { id: "Simulasi Kredit", en: "Loan Calculator" },
        { id: "Cari mobil impian Anda (mis. Avanza, HR-V, Innova, Brio)...", en: "Search your dream car (e.g. Avanza, HR-V, Innova)..." },
        { id: "Cari merek mobil...", en: "Search car brand..." },
        { id: "Filter Cepat", en: "Quick Filters" },
        { id: "Quick Filters", en: "Quick Filters" },
        { id: "Urutkan", en: "Sort By" },

        // Kategori
        { id: "Kategori Cepat:", en: "Quick Categories:" },
        { id: "Semua Mobil", en: "All Cars" },
        { id: "< 100 Juta", en: "< 100M IDR" },
        { id: "100 - 200 Juta", en: "100 - 200M IDR" },
        { id: "200 - 350 Juta", en: "200 - 350M IDR" },
        { id: "350 Juta+ (Premium)", en: "350M+ (Luxury)" },
        { id: "350 Juta+ (Mewah)", en: "350M+ (Luxury)" },
        { id: "SUV & Crossover", en: "SUV & Crossover" },
        { id: "MPV 7-Seater", en: "7-Seater MPV" },
        { id: "MPV 7 Penumpang", en: "7-Seater MPV" },
        { id: "Mobil Perkotaan", en: "City Car" },
        { id: "City Car", en: "City Car" },
        { id: "Mobil Listrik (EV)", en: "Electric Vehicle (EV)" },
        { id: "Listrik (EV)", en: "Electric (EV)" },

        // USP Bar
        { id: "Showroom Dealer Resmi (1 Pemilik Tunggal)", en: "Official Dealer Showroom (Single Ownership)" },
        { id: "100% Stok Milik Showroom Sendiri (Bukan Perantara)", en: "100% Owned Showroom Stock (No Middlemen)" },
        { id: "Garansi Resmi Showroom 1 Tahun", en: "1-Year Official Showroom Warranty" },
        { id: "Kami Siap Beli Mobil Anda Tunai di Tempat", en: "We Buy Your Car with Immediate Cash" },

        // Sidebar Filter
        { id: "Filter Mobil", en: "Car Filters" },
        { id: "Pilihan Merek (19 Merek)", en: "Brand Selection (19 Brands)" },
        { id: "Semua Merek", en: "All Brands" },
        { id: "Rentang Harga (Rp)", en: "Price Range (IDR)" },
        { id: "Tahun Pembuatan", en: "Manufacturing Year" },
        { id: "Tipe Bodi Kendaraan", en: "Vehicle Body Type" },
        { id: "Transmisi", en: "Transmission" },
        { id: "Semua Transmisi", en: "All Transmissions" },
        { id: "Manual Saja", en: "Manual Only" },
        { id: "Otomatis (Matic)", en: "Automatic Only" },
        { id: "Pilihan Warna", en: "Color Selection" },
        { id: "Semua Warna", en: "All Colors" },
        { id: "Lokasi Showroom", en: "Showroom Branch" },
        { id: "Semua Cabang", en: "All Branches" },
        { id: "Semua Cabang Jabodetabek", en: "All Greater Jakarta Branches" },
        { id: "Hanya Mobil Bergaransi 1 Tahun", en: "1-Year Warranty Only" },
        { id: "Hanya Unit Bergaransi Resmi 1 Tahun", en: "1-Year Official Warranty Only" },
        { id: "Reset", en: "Reset" },

        // Stock Header & Badge
        { id: "Stok Resmi Showroom Kami:", en: "Our Official Showroom Stock:" },
        { id: "Menampilkan", en: "Showing" },
        { id: "unit ready stock", en: "units available" },
        { id: "unit siap pakai", en: "units available" },
        { id: "100% Aset Resmi Showroom", en: "100% Official Showroom Inventory" },
        { id: "Siap Test Drive Hari Ini", en: "Ready for Test Drive Today" },
        { id: "Siap Uji Kemudi Hari Ini", en: "Ready for Test Drive Today" },

        // Card & Mobil
        { id: "Garansi", en: "Warranty" },
        { id: "Lulus Inspeksi", en: "Inspected" },
        { id: "Lihat Detail", en: "View Details" },
        { id: "Manual", en: "Manual" },
        { id: "Otomatis", en: "Automatic" },

        // Jual Mobil
        { id: "Jual Mobil Anda dengan", en: "Sell Your Car with" },
        { id: "Harga Pasar Tertinggi", en: "Highest Market Price" },
        { id: "PENAKSIRAN HARGA RESMI • TERPERCAYA SEJAK 2018", en: "OFFICIAL VALUATION • TRUSTED SINCE 2018" },
        { id: "Inspeksi Gratis", en: "Free Inspection" },
        { id: "Teknisi datang ke rumah", en: "Doorstep technician visit" },
        { id: "Dana Cair 1 Jam", en: "1-Hour Payout" },
        { id: "Transfer realtime tanpa tunda", en: "Instant direct bank transfer" },
        { id: "Bonus Trade-In", en: "Trade-In Bonus" },
        { id: "Ekstra subsidi khusus showroom", en: "Extra showroom trade-in subsidy" },
        { id: "Mobil Terjual Bulan Ini", en: "Cars Sold This Month" },
        { id: "Rata-rata Waktu Inspeksi", en: "Average Inspection Time" },
        { id: "Tingkat Kepuasan Penjual", en: "Seller Satisfaction Rate" },
        { id: "Mulai Estimasi Harga Sekarang", en: "Start Price Estimate Now" },
        { id: "Formulir Estimasi Harga & Jadwal Inspeksi", en: "Price Estimate & Inspection Schedule Form" },
        { id: "Pilih Jenis Transaksi Penjualan:", en: "Select Sales Transaction Type:" },
        { id: "Jual Langsung (Cash Cair 1 Jam)", en: "Direct Cash Sale (1-Hour Payout)" },
        { id: "Tukar Tambah (Trade-In)", en: "Trade-In (Exchange)" },
        { id: "SPESIFIKASI IDENTITAS KENDARAAN", en: "VEHICLE IDENTIFICATION SPECIFICATIONS" },
        { id: "STATUS LEGALITAS DOKUMEN & KONDISI FISIK", en: "DOCUMENT LEGALITY & PHYSICAL CONDITION" },
        { id: "JADWAL INSPEKSI & KONTAK PEMILIK", en: "INSPECTION SCHEDULE & OWNER CONTACT" },
        { id: "Hitung Estimasi Harga & Ajukan Inspeksi Gratis", en: "Calculate Estimate & Request Free Inspection" },
        { id: "3 Langkah Mudah Jual Mobil", en: "3 Easy Steps to Sell Your Car" },
        { id: "Isi Data & Jadwal Inspeksi", en: "Fill Details & Choose Schedule" },
        { id: "Inspeksi 160 Titik Gratis", en: "Free 160-Point Inspection" },
        { id: "Penawaran & Dana Cair 1 Jam", en: "Offer & 1-Hour Cash Payout" },
        { id: "DOKUMEN YANG PERLU DISIAPKAN", en: "DOCUMENTS TO PREPARE" },
        { id: "Mengapa Jual di Mobile Second", en: "Why Selling at Mobile Second is" },
        { id: "Jauh Lebih Menguntungkan?", en: "Far More Profitable?" },
        { id: "Jual di Mobile Second Showroom", en: "Sell at Mobile Second Showroom" },
        { id: "Jual Sendiri ke Marketplace Umum", en: "Selling Privately on Public Marketplaces" },
        { id: "FAQ Seputar Penjualan & Tukar Tambah", en: "FAQ About Selling & Trade-In" },
        { id: "Standar 160 Titik Inspeksi Transparan", en: "Transparent 160-Point Inspection Standards" },
        { id: "Informasi Mobil Anda", en: "Your Vehicle Details" },
        { id: "Informasi Kontak Pemilik", en: "Owner Contact Information" },
        { id: "Dapatkan Estimasi Harga Sekarang", en: "Get Instant Price Estimate" },
        { id: "Hitung Estimasi Harga", en: "Calculate Price Estimate" },
        { id: "Merek Mobil", en: "Car Brand" },
        { id: "Model / Tipe Mobil", en: "Model / Variant" },
        { id: "Tahun", en: "Year" },
        { id: "Kilometer Saat Ini", en: "Current Mileage" },
        { id: "Kondisi Fisik Mobil", en: "Physical Condition" },
        { id: "Nama Lengkap", en: "Full Name" },
        { id: "Nomor WhatsApp Aktif", en: "Active WhatsApp Number" },
        { id: "Kota Domisili", en: "City of Residence" },
        { id: "Bandingkan Layanan", en: "Service Comparison" },
        { id: "Kriteria", en: "Criteria" },
        { id: "Mobile Second (Resmi)", en: "Mobile Second (Official)" },
        { id: "Jual Mandiri / Perorangan", en: "Private Selling (Individual)" },

        // Promo
        { id: "Program Promo & Penawaran Spesial Showroom", en: "Showroom Promotional Program & Special Offers" },
        { id: "Bunga Kredit Spesial Mulai 2.9%", en: "Special Loan Interest Starting at 2.9%" },
        { id: "Gratis Servis & Ganti Oli 1 Tahun", en: "Free 1-Year Service & Oil Change" },
        { id: "Gratis Balik Nama STNK & BPKB", en: "Free Title Transfer (STNK & BPKB)" },
        { id: "Cashback Tukar Tambah Rp 5.000.000", en: "Trade-In Cashback IDR 5,000,000" },
        { id: "Klaim Promo Sekarang", en: "Claim This Offer Now" },
        { id: "Klaim Promo Ini", en: "Claim This Offer" },
        { id: "Hubungi Sales untuk Klaim Promo", en: "Contact Sales to Claim Offer" },
        { id: "Syarat & Ketentuan Umum:", en: "Terms & Conditions:" },

        // Simulasi Kredit
        { id: "Kalkulator Simulasi Kredit & Estimasi Cicilan Mobil Bekas", en: "Used Car Loan Calculator & Monthly Installment" },
        { id: "Harga Mobil (Rp)", en: "Car Price (IDR)" },
        { id: "Uang Muka / DP (%)", en: "Down Payment / DP (%)" },
        { id: "Tenor Kredit", en: "Loan Tenure" },
        { id: "Estimasi Cicilan per Bulan:", en: "Estimated Monthly Installment:" },
        { id: "Total Uang Muka (DP):", en: "Total Down Payment (DP):" },
        { id: "Terapkan pada Mobil Pilihan", en: "Apply to Selected Vehicle" },
        { id: "Hitung Simulasi Cicilan", en: "Calculate Installment" },
        { id: "Rincian Perhitungan Kredit", en: "Loan Calculation Breakdown" },
        { id: "Pilihan Tenor & Angsuran Bulanan", en: "Tenure Options & Monthly Payments" },
        { id: "Mitra Pembiayaan / Leasing Resmi", en: "Official Financing & Leasing Partners" },

        // Tentang Kami
        { id: "Standar Baru Beli Mobil Bekas:", en: "A New Benchmark for Buying Used Cars:" },
        { id: "Aman, Transparan & Bergaransi", en: "Safe, Transparent & Guaranteed" },
        { id: "Mengapa Memilih Mobile Second?", en: "Why Choose Mobile Second?" },
        { id: "Standar Inspeksi 160 Titik", en: "160-Point Digital Inspection" },
        { id: "Profil Mobile Second", en: "Mobile Second Profile" },
        { id: "Garansi 1 Tahun Mesin & Transmisi", en: "1-Year Engine & Transmission Warranty" },
        { id: "Cabang Showroom Jabodetabek", en: "Greater Jakarta Showroom Branches" },
        { id: "Jaringan Showroom Resmi di Jabodetabek", en: "Official Showroom Network across Greater Jakarta" },
        { id: "Mengapa Memilih Kami?", en: "Why Choose Us?" },

        // Detail Mobil
        { id: "Harga Tunai (Cash)", en: "Cash Price" },
        { id: "Estimasi Kredit / Cicilan", en: "Estimated Monthly Loan" },
        { id: "Spesifikasi Kendaraan", en: "Vehicle Specifications" },
        { id: "Fitur & Kelengkapan", en: "Features & Equipment" },
        { id: "Laporan Inspeksi 160 Titik", en: "160-Point Inspection Report" },
        { id: "Jadwalkan Uji Kemudi (Test Drive)", en: "Schedule a Test Drive" },
        { id: "Tanya Unit via WhatsApp", en: "Inquire via WhatsApp" },

        // Footer
        { id: "Menu Cepat", en: "Quick Links" },
        { id: "Menu Navigasi", en: "Navigation Menu" },
        { id: "Layanan & Jaminan", en: "Services & Guarantees" },
        { id: "Hubungi Showroom Kami", en: "Contact Our Showroom" },
        { id: "Alamat Showroom (Contoh): Jl. Otomotif Raya No. 88, Kawasan Niaga Barat, Jakarta", en: "Showroom Address (Example): Jl. Otomotif Raya No. 88, West Commercial District, Jakarta" },
        { id: "Hak Cipta Dilindungi Undang-Undang", en: "All Rights Reserved" }
    ];

    // Ambil bahasa saat ini dari localStorage, default 'id'
    let currentLang = localStorage.getItem('mobile_second_lang') || 'id';

    /**
     * Dapatkan bahasa aktif
     */
    function getLanguage() {
        return currentLang;
    }

    /**
     * Setel bahasa aktif dan perbarui UI di seluruh dokumen
     */
    function setLanguage(lang) {
        if (lang !== 'id' && lang !== 'en') lang = 'id';
        if (currentLang === lang) return;
        localStorage.setItem('mobile_second_lang', lang);
        window.location.reload();
    }

    /**
     * Update tampilan tombol ID / EN di navbar
     */
    function updateSwitcherUI() {
        const btnIdList = document.querySelectorAll('.lang-btn-id');
        const btnEnList = document.querySelectorAll('.lang-btn-en');

        btnIdList.forEach(btn => {
            if (currentLang === 'id') {
                btn.className = "lang-btn-id px-2.5 py-1 rounded-full transition-all text-xs font-bold bg-brand-orange text-white shadow-sm flex items-center gap-1 cursor-pointer";
            } else {
                btn.className = "lang-btn-id px-2.5 py-1 rounded-full transition-all text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer";
            }
        });

        btnEnList.forEach(btn => {
            if (currentLang === 'en') {
                btn.className = "lang-btn-en px-2.5 py-1 rounded-full transition-all text-xs font-bold bg-brand-orange text-white shadow-sm flex items-center gap-1 cursor-pointer";
            } else {
                btn.className = "lang-btn-en px-2.5 py-1 rounded-full transition-all text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer";
            }
        });
    }

    /**
     * Update elemen yang memiliki atribut data-i18n="key"
     */
    function updateDataI18nElements() {
        const dict = DICTIONARY[currentLang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });
    }

    /**
     * Terjemahkan placeholder input
     */
    function updateInputPlaceholders() {
        const dict = DICTIONARY[currentLang];
        const master = (currentLang === 'en' && window.ALL_TRANSLATIONS) ? window.ALL_TRANSLATIONS : {};

        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
            const ph = el.getAttribute('placeholder');
            if (!ph) return;
            if (currentLang === 'en' && master[ph]) {
                el.placeholder = master[ph];
            } else if (dict && el.hasAttribute('data-i18n-placeholder')) {
                const key = el.getAttribute('data-i18n-placeholder');
                if (dict[key]) el.placeholder = dict[key];
            }
        });

        const globalSearch = document.getElementById('globalSearchInput');
        if (globalSearch && dict) {
            globalSearch.placeholder = dict["search_placeholder"] || globalSearch.placeholder;
        }

        const brandSearch = document.getElementById('brandSearchInput');
        if (brandSearch && dict) {
            brandSearch.placeholder = dict["filter_brand_search"] || brandSearch.placeholder;
        }
    }

    /**
     * Terjemahkan teks node dalam DOM yang cocok dengan kamus master lengkap dan daftar frasa
     */
    function translateDomText() {
        if (currentLang !== 'en') return;

        const master = window.ALL_TRANSLATIONS || {};

        // 1. Translate document title
        if (master[document.title]) {
            document.title = master[document.title];
        }

        // 2. Translate meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            const content = metaDesc.getAttribute('content');
            if (content && master[content]) {
                metaDesc.setAttribute('content', master[content]);
            }
        }

        // 3. Translate select options
        document.querySelectorAll('option').forEach(opt => {
            const trimmed = opt.textContent.trim();
            if (master[trimmed]) {
                opt.textContent = master[trimmed];
            }
        });

        // 4. Sort frasa dari yang terpanjang ke terpendek agar kalimat panjang diterjemahkan lebih dulu
        const sortedPhrases = [...DIRECT_PHRASES].sort((a, b) => (b.id || '').length - (a.id || '').length);

        function walk(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                let val = node.nodeValue;
                if (!val || !val.trim()) return;
                const trimmed = val.trim();

                // Check exact match in master dictionary first
                if (master[trimmed]) {
                    node.nodeValue = val.replace(trimmed, master[trimmed]);
                    return;
                }

                // Fallback to phrase replacements
                for (let i = 0; i < sortedPhrases.length; i++) {
                    const pair = sortedPhrases[i];
                    if (pair.id && pair.en && val.includes(pair.id)) {
                        val = val.split(pair.id).join(pair.en);
                        node.nodeValue = val;
                    }
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const tag = node.tagName.toLowerCase();
                if (tag === 'script' || tag === 'style' || tag === 'noscript' || node.classList.contains('no-translate')) {
                    return;
                }
                for (let child = node.firstChild; child; child = child.nextSibling) {
                    walk(child);
                }
            }
        }

        walk(document.body);
    }

    /**
     * Inisialisasi otomatis saat DOM siap
     */
    function init() {
        document.documentElement.lang = currentLang;
        updateSwitcherUI();
        updateDataI18nElements();
        updateInputPlaceholders();
        if (currentLang === 'en') {
            translateDomText();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return {
        getLanguage: getLanguage,
        setLanguage: setLanguage,
        dict: DICTIONARY,
        refresh: function() {
            updateDataI18nElements();
            updateInputPlaceholders();
            if (currentLang === 'en') translateDomText();
            updateSwitcherUI();
        }
    };
})();

// Helper global singkat agar mudah dipanggil di onclick="setLanguage('id')" atau 'en'
window.setLanguage = function(lang) {
    MobileSecondI18n.setLanguage(lang);
};
