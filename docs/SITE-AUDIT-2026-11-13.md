# CURIO sayt yoxlaması — 13 noyabr 2026

Yoxlama mövcud yerli layihədə aparılıb. 19 səhifə, altı bölmə, altı əsas quiz və Daily Six əhatə olunub. Baxış serveri: `http://127.0.0.1:3001`.

## Düzəldilən problemlər

| Problem | Düzəliş |
| --- | --- |
| Quizdə bir cavabdan sonra başqa səhifəyə keçid saxlanırdı | Brauzerin görünməyən/saxlayan çıxış xəbərdarlığı silindi; yarımçıq quiz naviqasiyanı bloklamır |
| History, Science, Philosophy, Art & Culture və Technology başlıqlarındakı Start Exploring heç nə etmirdi | Beş `javascript:void(0)` keçidi real mövzu siyahısına bağlandı |
| Bəzi səhifələrin hesab ikonları sadəcə şəkil idi | Bütün ictimai başlıqlarda Sign In səhifəsinə gedən, adı olan hesab keçidi verildi |
| Hesab ikonunu keçidə çevirmək təkrarlanan Sign Out nəzarəti yarada bilərdi | Sessiya skripti Sign Out düyməsini yalnız mətn şəklindəki giriş keçidi üçün yaradır |
| Daily Six-də Explore Geography/History və s. həmişə ümumi siyahıya gedirdi | Hər sualın mövzu keçidi öz bölməsinə bağlandı; altısı da ayrıca basılıb yoxlandı |
| Ana səhifənin altı bölmə başlığında pozulmuş HTML atributları var idi | Başlıq sinifləri düzəldildi |
| Ana səhifə və Geography brauzer başlıqları boş idi | Hər ikisinə aydın səhifə başlığı əlavə edildi |
| Art History səhifəsində Art Art & Culture yazılırdı | Tab, əsas başlıq və breadcrumb Art History olaraq düzəldildi |
| Yalnız History üçün qısa URL var idi | Bütün mövcud səhifələr üçün `.html`-siz marşrut dəstəyi əlavə edildi; son `/` nisbi faylları pozmaması üçün yönləndirilir, sorğu parametrləri qorunur |
| Bəzi copyright və hüquqi mətndə yazı/işarə xətaları var idi | 2025 copyright 2026 ilə uyğunlaşdırıldı, `Children?s` kimi pozulmuş apostroflar düzəldildi; hüquqi məzmunun mənası dəyişdirilmədi |
| Kök qovluqda testlər, hesabatlar, audit JSON-u və şəkillər qarışıq idi | Sənədlər, arxiv, testlər, skript və görünüş şəkilləri ayrı qovluqlara yığıldı; bütün test yolları yeniləndi |
| Ümumi quiz testi `npm test` daxilində iki dəfə işləyirdi | Validatorun testə təkrar qoşulması silindi; suite hər mərhələni bir dəfə çalışdırır |

## Brauzerdə yoxlanılanlar

- 19 səhifənin hər biri açıldı. Görünən **226 yerli keçid** bir-bir basıldı və gözlənən ünvanla müqayisə edildi. Bunlara header, hesab ikonu, Start Exploring, breadcrumb, mövzu kartı, footer, Terms/Privacy və hər iki hüquqi səhifənin bütün məzmun keçidləri daxildir.
- Daily Six-in sualdan sonra yaranan **altı mövzu keçidi** ayrıca basılıb təsdiqləndi. Beləliklə, 232 keçid ssenarisi yoxlanıldı. İlkin sürətli brauzer basmalarında dəyişməyən dörd keçid ayrıca təzə səhifədən yoxlanıldı və düzgün açıldı.
- Daily Six-in altı sualı və altı əsas quizin hər birində 15 sual: **96 sual** brauzerdə cavablandırıldı. Sınaq seçimləri A/B/C/D üzrə növbələşdirildi.
- Cavabsız Next bağlıdır. Cavab seçiləndən sonra dörd seçim kilidlənir, düzgün/səhv cavab və izah göstərilir. Next və son sualdakı See results işləyir.
- Yeddi nəticə ekranında bal/accuracy göründü. Review Answers, bütün sual nömrələri, Previous, Next və Results summary basıldı: **117 review naviqasiya düyməsi**, əlavə olaraq yeddi Review Answers düyməsi.
- Sign In: Google konfiqurasiya xəbərdarlığı, boş giriş forması, emailsiz Forgot password və Resend verification, parolu göstər/gizlət yoxlandı.
- Sign Up: Google konfiqurasiya xəbərdarlığı, boş qeydiyyat forması, emailsiz Resend verification və hər iki parol görünüş düyməsi yoxlandı.
- Reset Password: recovery linki olmadan Update password bağlıdır və izah görünür; parol görünüş düyməsi işləyir. Callback səhifəsinin keçidləri yoxlandı.
- Bütün 19 səhifə 390×844 mobil viewport-da yoxlandı: üfüqi daşma və müşahidə edilən qırıq şəkil tapılmadı. Mobil ana səhifə vizual olaraq da nəzərdən keçirildi. Bu, bütün cihazların sertifikasiyası deyil.
- Brauzerin tutduğu error qeydləri boş idi. Tailwind CDN-in production istifadə ilə bağlı standart xəbərdarlığı qalır; yerli baxışı bloklamır.

### Brauzerdə keçid inventarı

| Səhifə qrupu | Səhifə sayı | Görünən yerli keçid |
| --- | ---: | ---: |
| Ana səhifə | 1 | 18 |
| Altı bölmə | 6 | 66 |
| Altı quiz | 6 | 66 |
| Sign In / Sign Up / Reset Password | 3 | 12 |
| Account confirmation | 1 | 6 |
| Terms | 1 | 26 |
| Privacy | 1 | 32 |
| Cəmi | 19 | 226 |

Terms-də bir, Privacy-də bir xarici provider keçidi inventarda görünsə də, bu yerli saytın yoxlamasına daxil edilmədi. Cədvəl yerli basmaları sayır. Eyni ünvana gedən müxtəlif düymələr ayrıca yoxlanılıb.

## Avtomatik yoxlamalar

`npm test` uğurla keçdi:

1. Altı bölmə və altı quiz, 90 əsas + 6 gündəlik sual; hər əsas quizdə 5 Easy / 5 Medium / 5 Hard; seçimlərin unikallığı, cavab indeksləri, script sintaksisi və fayl yolları.
2. 19 səhifənin başlığı, **234 statik yerli keçid və fragment hədəfi**, aktiv Explore/Account keçidləri, başlıq HTML-i. Statik HTML-in gizli ilkin quiz görünüşündəki keçidləri də bu saya daxildir.
3. Yarımçıq quizdən sonra naviqasiyanın bloklanmaması və Daily Six-də altı düzgün mövzu ünvanı üçün yeni regression yoxlamaları.
4. **21 tam DOM quiz ssenarisi**: yeddi quizdə düzgün, səhv və qarışıq seçimlər; bal hesabı; cavabsız Next; köhnə/ikiqat basmalar; seçim kilidi və yalnız oxuma rejimində cavablara baxış. Mövcud replay-siz davranış saxlanılır.
5. Qeydiyyat, giriş xətaları, doğrulama, email cooldown, bərpa icazəsi, parol yeniləməsi, callback, SDK yüklənmə xətası və Sign Out: mock auth ilə.
6. Quraşdırılmış Supabase SDK 2.102.0 ilə PKCE recovery regression: HTTP mock ilə.
7. Ayrı `3087` portunda bütün HTML səhifələri, qısa URL-lər, son slash yönləndirməsi, bütün mövcud `assets/` faylları, təhlükəsizlik header-ləri, yanlış metod/URL-lər və test/sənəd/backup fayllarının ictimai verilməməsi.

Server testləri bu mühitdə localhost socket icazəsi tələb etdiyinə görə sandbox xaricində çalışdırıldı. Bu, tətbiq xətası deyil.

## Qalan imkanlar və təsdiqlənməmiş hissələr

- **42 Coming Soon mövzusu hazır deyil.** Onlar işləyən kart kimi təqdim edilməyib; yeni dərs və sual məzmunu bu yoxlamada hazırlanmadı.
- Google OAuth deaktivdir. Provider qurulmadan Google düyməsi xəbərdarlıq göstərir.
- Real istifadəçi yaradılmadı, email göndərilmədi, hesab parolu dəyişdirilmədi. Real giriş, email çatdırılması və inbox → recovery axınının uğuru bu hesabatla təsdiqlənmir. Bu hissələr handler və SDK səviyyəsində mock ilə yoxlanılıb.
- Supabase Dashboard/SMTP/redirect allowlist və verilənlər bazası yoxlanılmayıb. `3001` istifadə edilirsə callback/recovery ünvanları həmin origin üçün icazəli olmalıdır.
- Quiz nəticələri səhifə yaddaşındadır; səhifədən çıxış/yeniləmə onları silir. Hesabla sinxronizasiya və davametmə yoxdur.
- Daily Six dataset-i sabitdir; gündəlik rotasiya yoxdur.
- Xarici Tailwind/font/SDK və bəzi şəkil mənbələri internetdən asılıdır. Mövcud şəkillər dəyişdirilməyib.
- Ehtiyat nüsxə ilə müqayisədə 48 şəkil faylı bayt səviyyəsində eynidir və 19 HTML səhifəsinin şəkil ünvanları saxlanılıb.
- Hüquqi səhifələrdə açıq işarələnmiş operator/əlaqə kimi tamamlanmamış məlumatlar qalır.

## Qovluq və bərpa

Yeni struktur və başlatma əmrləri kökdəki [README](../README.md) faylındadır. Əvvəlki hesabatlar `docs/archive/`, ilkin ekran şəkilləri `docs/screenshots/`, testlər `tests/`, validator `scripts/` altındadır. Public HTML faylları və asset yolları saxlanılıb.

Bu dəyişikliklərdən əvvəlki ehtiyat nüsxə: `.curio-backups/site-audit-2026-11-13/`. Qovluqda köhnə kök faylları və `assets/` nüsxəsi var. Mövcud başqa backup-lar silinməyib. `node_modules` bərpa nüsxəsinə daxil edilməyib; onu `npm ci` ilə bərpa etmək olar.
