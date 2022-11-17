var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


//slider

let prodCommentsSlider = [...document.querySelectorAll('.prod-answers-slider')];

function homeHeroSlider() {
    if (!prodCommentsSlider.length) {

    } else {
        prodCommentsSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper-container');
            let sldNext = sld.querySelector('.control_next');
            let sldPrev = sld.querySelector('.control_prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },


            });
        })
    }
}

homeHeroSlider();


//slider


let tabBtn = [...document.querySelectorAll('.tab-btn')];
let tabCont = [...document.querySelectorAll('.tab-cont')];

function changeActiveTab() {
    if (tabBtn.length) {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                tabBtn.forEach((btn2) => {
                    btn2.classList.remove('active');
                });
                btn.classList.add('active');
                tabCont.forEach((btn3) => {
                    btn3.classList.remove('active');
                });
                tabCont[k].classList.add('active');
            })
        })
    }
}

changeActiveTab();

let burg = [...document.querySelectorAll('.menu_hamburger')];

let subMenus = [...document.querySelectorAll('.nav_mobile_wrapper .menu-item-has-children')];

function arrowsSubs() {
    if (subMenus.length) {
        subMenus.forEach((btn) => {
            let arrow = document.createElement('div');
            arrow.classList.add('collapse_arrow');
            arrow.classList.add('s_collapse_arrow');
            btn.appendChild(arrow);
        })
    }
}

arrowsSubs();
let colaps = [...document.querySelectorAll('.s_collapse_arrow')];
let pricingCont = [...document.querySelectorAll('.pricing_container')];

function burgCont() {
    if (burg.length) {
        burg.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.querySelector('.nav_mobile_wrapper').classList.add('active');
            })
        });
        document.querySelector('.nav_mobile_wrapper .action_close').addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            e.target.closest('.nav_mobile_wrapper').classList.remove('active');
        });
        colaps.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
                btn.closest('li.menu-item-has-children').querySelector('.menu_inner').classList.toggle('active');
            })
        })
    }
}

burgCont();
function ifWrapperLang() {
    if (document.querySelector('#s_translate_control_wrapper')) {
        document.querySelector('#s_translate_control_wrapper').addEventListener('mouseover', () => {
            document.querySelector('#s_locales_menu').classList.add('active');
        });
        document.querySelector('#s_translate_control_wrapper').addEventListener('mouseout', () => {
            document.querySelector('#s_locales_menu').classList.remove('active');
        });
    }
}
ifWrapperLang()

let menuDesk = [...document.querySelectorAll('.nav_desktop_wrapper .menu-item-has-children')];

function hoveringDesk() {
    if (menuDesk.length) {
        menuDesk.forEach((btn) => {
            btn.addEventListener('mouseover', () => {
                btn.querySelector('.menu_inner').classList.add('active');
            });
            btn.addEventListener('mouseout', () => {
                btn.querySelector('.menu_inner').classList.remove('active');
            });
        })
    }
}

hoveringDesk();


//forms test

let u = [{
    "name": "Afghanistan",
    "code": {"_code": "AF", "_err": null},
    "key": "locations__country_afghanistan"
}, {
    "name": "Åland Islands",
    "code": {"_code": "AX", "_err": null},
    "key": "locations__country_aland_islands"
}, {
    "name": "Albania",
    "code": {"_code": "AL", "_err": null},
    "key": "locations__country_albania"
}, {
    "name": "Algeria",
    "code": {"_code": "DZ", "_err": null},
    "key": "locations__country_algeria"
}, {
    "name": "American Samoa",
    "code": {"_code": "AS", "_err": null},
    "key": "locations__country_american_samoa"
}, {
    "name": "Andorra",
    "code": {"_code": "AD", "_err": null},
    "key": "locations__country_andorra"
}, {
    "name": "Angola",
    "code": {"_code": "AO", "_err": null},
    "key": "locations__country_angola"
}, {
    "name": "Anguilla",
    "code": {"_code": "AI", "_err": null},
    "key": "locations__country_anguilla"
}, {
    "name": "Antarctica",
    "code": {"_code": "AQ", "_err": null},
    "key": "locations__country_antarctica"
}, {
    "name": "Antigua and Barbuda",
    "code": {"_code": "AG", "_err": null},
    "key": "locations__country_antigua_and_barbuda"
}, {
    "name": "Argentina",
    "code": {"_code": "AR", "_err": null},
    "key": "locations__country_argentina"
}, {
    "name": "Armenia",
    "code": {"_code": "AM", "_err": null},
    "key": "locations__country_armenia"
}, {
    "name": "Aruba",
    "code": {"_code": "AW", "_err": null},
    "key": "locations__country_aruba"
}, {
    "name": "Australia",
    "code": {"_code": "AU", "_err": null},
    "key": "locations__country_australia"
}, {
    "name": "Austria",
    "code": {"_code": "AT", "_err": null},
    "key": "locations__country_austria"
}, {
    "name": "Azerbaijan",
    "code": {"_code": "AZ", "_err": null},
    "key": "locations__country_azerbaijan"
}, {
    "name": "Bahamas",
    "code": {"_code": "BS", "_err": null},
    "key": "locations__country_bahamas"
}, {
    "name": "Bahrain",
    "code": {"_code": "BH", "_err": null},
    "key": "locations__country_bahrain"
}, {
    "name": "Bangladesh",
    "code": {"_code": "BD", "_err": null},
    "key": "locations__country_bangladesh"
}, {
    "name": "Barbados",
    "code": {"_code": "BB", "_err": null},
    "key": "locations__country_barbados"
}, {
    "name": "Belarus",
    "code": {"_code": "BY", "_err": null},
    "key": "locations__country_belarus"
}, {"name": "Belize", "code": {"_code": "BZ", "_err": null}, "key": "locations__country_belize"}, {
    "name": "Benin",
    "code": {"_code": "BJ", "_err": null},
    "key": "locations__country_benin"
}, {
    "name": "Bermuda",
    "code": {"_code": "BM", "_err": null},
    "key": "locations__country_bermuda"
}, {
    "name": "Bhutan",
    "code": {"_code": "BT", "_err": null},
    "key": "locations__country_bhutan"
}, {
    "name": "Bolivia",
    "code": {"_code": "BO", "_err": null},
    "key": "locations__country_bolivia"
}, {
    "name": "Bosnia and Herzegovina",
    "code": {"_code": "BA", "_err": null},
    "key": "locations__country_bosnia_and_herzegovina"
}, {
    "name": "Botswana",
    "code": {"_code": "BW", "_err": null},
    "key": "locations__country_botswana"
}, {
    "name": "Bouvet Island",
    "code": {"_code": "BV", "_err": null},
    "key": "locations__country_bouvet_island"
}, {
    "name": "Brazil",
    "code": {"_code": "BR", "_err": null},
    "key": "locations__country_brazil"
}, {
    "name": "British Indian Ocean Territory",
    "code": {"_code": "IO", "_err": null},
    "key": "locations__country_british_indian_ocean_territory"
}, {
    "name": "Brunei Darussalam",
    "code": {"_code": "BN", "_err": null},
    "key": "locations__country_brunei_darussalam"
}, {
    "name": "Bulgaria",
    "code": {"_code": "BG", "_err": null},
    "key": "locations__country_bulgaria"
}, {
    "name": "Burkina Faso",
    "code": {"_code": "BF", "_err": null},
    "key": "locations__country_burkina_faso"
}, {
    "name": "Burundi",
    "code": {"_code": "BI", "_err": null},
    "key": "locations__country_burundi"
}, {
    "name": "Cambodia",
    "code": {"_code": "KH", "_err": null},
    "key": "locations__country_cambodia"
}, {
    "name": "Cameroon",
    "code": {"_code": "CM", "_err": null},
    "key": "locations__country_cameroon"
}, {
    "name": "Canada",
    "code": {"_code": "CA", "_err": null},
    "key": "locations__country_canada"
}, {
    "name": "Cape Verde",
    "code": {"_code": "CV", "_err": null},
    "key": "locations__country_cape_verde"
}, {
    "name": "Cayman Islands",
    "code": {"_code": "KY", "_err": null},
    "key": "locations__country_cayman_islands"
}, {
    "name": "Central African Republic",
    "code": {"_code": "CF", "_err": null},
    "key": "locations__country_central_african_republic"
}, {"name": "Chad", "code": {"_code": "TD", "_err": null}, "key": "locations__country_chad"}, {
    "name": "Chile",
    "code": {"_code": "CL", "_err": null},
    "key": "locations__country_chile"
}, {
    "name": "China",
    "code": {"_code": "CN", "_err": null},
    "key": "locations__country_china"
}, {
    "name": "Christmas Island",
    "code": {"_code": "CX", "_err": null},
    "key": "locations__country_christmas_island"
}, {
    "name": "Cocos (Keeling) Islands",
    "code": {"_code": "CC", "_err": null},
    "key": "locations__country_cocos_islands"
}, {
    "name": "Colombia",
    "code": {"_code": "CO", "_err": null},
    "key": "locations__country_colombia"
}, {
    "name": "Comoros",
    "code": {"_code": "KM", "_err": null},
    "key": "locations__country_comoros"
}, {
    "name": "Congo",
    "code": {"_code": "CG", "_err": null},
    "key": "locations__country_congo"
}, {
    "name": "Congo, The Democratic Republic of the",
    "code": {"_code": "CD", "_err": null},
    "key": "locations__country_congo_the_democratic_republic"
}, {
    "name": "Cook Islands",
    "code": {"_code": "CK", "_err": null},
    "key": "locations__country_cook_islands"
}, {
    "name": "Costa Rica",
    "code": {"_code": "CR", "_err": null},
    "key": "locations__country_costa_rica"
}, {
    "name": "Cote D'Ivoire",
    "code": {"_code": "CI", "_err": null},
    "key": "locations__country_cote_d_ivoire"
}, {"name": "Croatia", "code": {"_code": "HR", "_err": null}, "key": "locations__country_croatia"}, {
    "name": "Cuba",
    "code": {"_code": "CU", "_err": null},
    "key": "locations__country_cuba"
}, {
    "name": "Cyprus",
    "code": {"_code": "CY", "_err": null},
    "key": "locations__country_cyprus"
}, {
    "name": "Czech Republic",
    "code": {"_code": "CZ", "_err": null},
    "key": "locations__country_czech_republic"
}, {
    "name": "Denmark",
    "code": {"_code": "DK", "_err": null},
    "key": "locations__country_denmark"
}, {
    "name": "Djibouti",
    "code": {"_code": "DJ", "_err": null},
    "key": "locations__country_djibouti"
}, {
    "name": "Dominica",
    "code": {"_code": "DM", "_err": null},
    "key": "locations__country_dominica"
}, {
    "name": "Dominican Republic",
    "code": {"_code": "DO", "_err": null},
    "key": "locations__country_dominican_republic"
}, {
    "name": "Ecuador",
    "code": {"_code": "EC", "_err": null},
    "key": "locations__country_ecuador"
}, {
    "name": "Egypt",
    "code": {"_code": "EG", "_err": null},
    "key": "locations__country_egypt"
}, {
    "name": "El Salvador",
    "code": {"_code": "SV", "_err": null},
    "key": "locations__country_el_salvador"
}, {
    "name": "Equatorial Guinea",
    "code": {"_code": "GQ", "_err": null},
    "key": "locations__country_equatorial_guinea"
}, {
    "name": "Eritrea",
    "code": {"_code": "ER", "_err": null},
    "key": "locations__country_eritrea"
}, {
    "name": "Estonia",
    "code": {"_code": "EE", "_err": null},
    "key": "locations__country_estonia"
}, {
    "name": "Ethiopia",
    "code": {"_code": "ET", "_err": null},
    "key": "locations__country_ethiopia"
}, {
    "name": "Falkland Islands (Malvinas)",
    "code": {"_code": "FK", "_err": null},
    "key": "locations__country_falkland_islands"
}, {
    "name": "Faroe Islands",
    "code": {"_code": "FO", "_err": null},
    "key": "locations__country_faroe_islands"
}, {"name": "Fiji", "code": {"_code": "FJ", "_err": null}, "key": "locations__country_fiji"}, {
    "name": "Finland",
    "code": {"_code": "FI", "_err": null},
    "key": "locations__country_finland"
}, {
    "name": "France",
    "code": {"_code": "FR", "_err": null},
    "key": "locations__country_france"
}, {
    "name": "French Guiana",
    "code": {"_code": "GF", "_err": null},
    "key": "locations__country_french_guiana"
}, {
    "name": "French Polynesia",
    "code": {"_code": "PF", "_err": null},
    "key": "locations__country_french_polynesia"
}, {
    "name": "French Southern Territories",
    "code": {"_code": "TF", "_err": null},
    "key": "locations__country_french_southern_territories"
}, {"name": "Gabon", "code": {"_code": "GA", "_err": null}, "key": "locations__country_gabon"}, {
    "name": "Gambia",
    "code": {"_code": "GM", "_err": null},
    "key": "locations__country_gambia"
}, {
    "name": "Georgia",
    "code": {"_code": "GE", "_err": null},
    "key": "locations__country_georgia"
}, {
    "name": "Germany",
    "code": {"_code": "DE", "_err": null},
    "key": "locations__country_germany"
}, {
    "name": "Ghana",
    "code": {"_code": "GH", "_err": null},
    "key": "locations__country_ghana"
}, {
    "name": "Gibraltar",
    "code": {"_code": "GI", "_err": null},
    "key": "locations__country_gibraltar"
}, {
    "name": "Greece",
    "code": {"_code": "GR", "_err": null},
    "key": "locations__country_greece"
}, {
    "name": "Greenland",
    "code": {"_code": "GL", "_err": null},
    "key": "locations__country_greenland"
}, {
    "name": "Grenada",
    "code": {"_code": "GD", "_err": null},
    "key": "locations__country_grenada"
}, {
    "name": "Guadeloupe",
    "code": {"_code": "GP", "_err": null},
    "key": "locations__country_guadeloupe"
}, {"name": "Guam", "code": {"_code": "GU", "_err": null}, "key": "locations__country_guam"}, {
    "name": "Guatemala",
    "code": {"_code": "GT", "_err": null},
    "key": "locations__country_guatemala"
}, {
    "name": "Guernsey",
    "code": {"_code": "GG", "_err": null},
    "key": "locations__country_guernsey"
}, {
    "name": "Guinea",
    "code": {"_code": "GN", "_err": null},
    "key": "locations__country_guinea"
}, {
    "name": "Guinea-Bissau",
    "code": {"_code": "GW", "_err": null},
    "key": "locations__country_guinea_bissau"
}, {"name": "Guyana", "code": {"_code": "GY", "_err": null}, "key": "locations__country_guyana"}, {
    "name": "Haiti",
    "code": {"_code": "HT", "_err": null},
    "key": "locations__country_haiti"
}, {
    "name": "Heard Island and Mcdonald Islands",
    "code": {"_code": "HM", "_err": null},
    "key": "locations__country_heard_island_and_mcdonald_islands"
}, {
    "name": "Holy See (Vatican City State)",
    "code": {"_code": "VA", "_err": null},
    "key": "locations__country_vatican_city_state"
}, {
    "name": "Honduras",
    "code": {"_code": "HN", "_err": null},
    "key": "locations__country_honduras"
}, {
    "name": "Hong-Kong",
    "code": {"_code": "HK", "_err": null},
    "key": "locations__country_hong_kong"
}, {
    "name": "Hungary",
    "code": {"_code": "HU", "_err": null},
    "key": "locations__country_hungary"
}, {
    "name": "Iceland",
    "code": {"_code": "IS", "_err": null},
    "key": "locations__country_iceland"
}, {
    "name": "India",
    "code": {"_code": "IN", "_err": null},
    "key": "locations__country_india"
}, {
    "name": "Indonesia",
    "code": {"_code": "ID", "_err": null},
    "key": "locations__country_indonesia"
}, {"name": "Iran", "code": {"_code": "IR", "_err": null}, "key": "locations__country_iran"}, {
    "name": "Iraq",
    "code": {"_code": "IQ", "_err": null},
    "key": "locations__country_iraq"
}, {
    "name": "Ireland",
    "code": {"_code": "IE", "_err": null},
    "key": "locations__country_ireland"
}, {
    "name": "Isle of Man",
    "code": {"_code": "IM", "_err": null},
    "key": "locations__country_isle_of_man"
}, {"name": "Israel", "code": {"_code": "IL", "_err": null}, "key": "locations__country_israel"}, {
    "name": "Italy",
    "code": {"_code": "IT", "_err": null},
    "key": "locations__country_italy"
}, {
    "name": "Jamaica",
    "code": {"_code": "JM", "_err": null},
    "key": "locations__country_jamaica"
}, {"name": "Japan", "code": {"_code": "JP", "_err": null}, "key": "locations__country_japan"}, {
    "name": "Jersey",
    "code": {"_code": "JE", "_err": null},
    "key": "locations__country_jersey"
}, {
    "name": "Jordan",
    "code": {"_code": "JO", "_err": null},
    "key": "locations__country_jordan"
}, {
    "name": "Kazakhstan",
    "code": {"_code": "KZ", "_err": null},
    "key": "locations__country_kazakhstan"
}, {"name": "Kenya", "code": {"_code": "KE", "_err": null}, "key": "locations__country_kenya"}, {
    "name": "Kiribati",
    "code": {"_code": "KI", "_err": null},
    "key": "locations__country_kiribati"
}, {
    "name": "Korea, Democratic People's Republic of",
    "code": {"_code": "KP", "_err": null},
    "key": "locations__country_korea_democratic_peoples_republic_of"
}, {
    "name": "Korea, Republic of",
    "code": {"_code": "KR", "_err": null},
    "key": "locations__country_korea_republic_of"
}, {
    "name": "Kuwait",
    "code": {"_code": "KW", "_err": null},
    "key": "locations__country_kuwait"
}, {
    "name": "Kyrgyzstan",
    "code": {"_code": "KG", "_err": null},
    "key": "locations__country_kyrgyzstan"
}, {
    "name": "Lao People's Democratic Republic",
    "code": {"_code": "LA", "_err": null},
    "key": "locations__country_lao_peoples_democratic_republic"
}, {
    "name": "Latvia",
    "code": {"_code": "LV", "_err": null},
    "key": "locations__country_latvia"
}, {
    "name": "Lebanon",
    "code": {"_code": "LB", "_err": null},
    "key": "locations__country_lebanon"
}, {
    "name": "Lesotho",
    "code": {"_code": "LS", "_err": null},
    "key": "locations__country_lesotho"
}, {
    "name": "Liberia",
    "code": {"_code": "LR", "_err": null},
    "key": "locations__country_liberia"
}, {
    "name": "Libyan Arab Jamahiriya",
    "code": {"_code": "LY", "_err": null},
    "key": "locations__country_libyan_arab_jamahiriya"
}, {
    "name": "Liechtenstein",
    "code": {"_code": "LI", "_err": null},
    "key": "locations__country_liechtenstein"
}, {
    "name": "Lithuania",
    "code": {"_code": "LT", "_err": null},
    "key": "locations__country_lithuania"
}, {
    "name": "Luxembourg",
    "code": {"_code": "LU", "_err": null},
    "key": "locations__country_luxembourg"
}, {
    "name": "Macao",
    "code": {"_code": "MO", "_err": null},
    "key": "locations__country_macao"
}, {
    "name": "Macedonia",
    "code": {"_code": "MK", "_err": null},
    "key": "locations__country_macedonia"
}, {
    "name": "Madagascar",
    "code": {"_code": "MG", "_err": null},
    "key": "locations__country_madagascar"
}, {
    "name": "Malawi",
    "code": {"_code": "MW", "_err": null},
    "key": "locations__country_malawi"
}, {
    "name": "Malaysia",
    "code": {"_code": "MY", "_err": null},
    "key": "locations__country_malaysia"
}, {
    "name": "Maldives",
    "code": {"_code": "MV", "_err": null},
    "key": "locations__country_maldives"
}, {"name": "Mali", "code": {"_code": "ML", "_err": null}, "key": "locations__country_mali"}, {
    "name": "Malta",
    "code": {"_code": "MT", "_err": null},
    "key": "locations__country_malta"
}, {
    "name": "Marshall Islands",
    "code": {"_code": "MH", "_err": null},
    "key": "locations__country_marshall_islands"
}, {
    "name": "Martinique",
    "code": {"_code": "MQ", "_err": null},
    "key": "locations__country_martinique"
}, {
    "name": "Mauritania",
    "code": {"_code": "MR", "_err": null},
    "key": "locations__country_mauritania"
}, {
    "name": "Mauritius",
    "code": {"_code": "MU", "_err": null},
    "key": "locations__country_mauritius"
}, {
    "name": "Mayotte",
    "code": {"_code": "YT", "_err": null},
    "key": "locations__country_mayotte"
}, {
    "name": "Mexico",
    "code": {"_code": "MX", "_err": null},
    "key": "locations__country_mexico"
}, {
    "name": "Micronesia, Federated States of",
    "code": {"_code": "FM", "_err": null},
    "key": "locations__country_micronesia"
}, {
    "name": "Moldova",
    "code": {"_code": "MD", "_err": null},
    "key": "locations__country_moldova"
}, {
    "name": "Monaco",
    "code": {"_code": "MC", "_err": null},
    "key": "locations__country_monaco"
}, {
    "name": "Mongolia",
    "code": {"_code": "MN", "_err": null},
    "key": "locations__country_mongolia"
}, {
    "name": "Montserrat",
    "code": {"_code": "MS", "_err": null},
    "key": "locations__country_montserrat"
}, {
    "name": "Morocco",
    "code": {"_code": "MA", "_err": null},
    "key": "locations__country_morocco"
}, {
    "name": "Mozambique",
    "code": {"_code": "MZ", "_err": null},
    "key": "locations__country_mozambique"
}, {
    "name": "Myanmar",
    "code": {"_code": "MM", "_err": null},
    "key": "locations__country_myanmar"
}, {
    "name": "Namibia",
    "code": {"_code": "NA", "_err": null},
    "key": "locations__country_namibia"
}, {"name": "Nauru", "code": {"_code": "NR", "_err": null}, "key": "locations__country_nauru"}, {
    "name": "Nepal",
    "code": {"_code": "NP", "_err": null},
    "key": "locations__country_nepal"
}, {
    "name": "Netherlands",
    "code": {"_code": "NL", "_err": null},
    "key": "locations__country_netherlands"
}, {
    "name": "Netherlands Antilles",
    "code": {"_code": "AN", "_err": null},
    "key": "locations__country_netherlands_antilles"
}, {
    "name": "New Caledonia",
    "code": {"_code": "NC", "_err": null},
    "key": "locations__country_new_caledonia"
}, {
    "name": "New Zealand",
    "code": {"_code": "NZ", "_err": null},
    "key": "locations__country_new_zealand"
}, {
    "name": "Nicaragua",
    "code": {"_code": "NI", "_err": null},
    "key": "locations__country_nicaragua"
}, {"name": "Niger", "code": {"_code": "NE", "_err": null}, "key": "locations__country_niger"}, {
    "name": "Nigeria",
    "code": {"_code": "NG", "_err": null},
    "key": "locations__country_nigeria"
}, {
    "name": "Niue",
    "code": {"_code": "NU", "_err": null},
    "key": "locations__country_niue"
}, {
    "name": "Norfolk Island",
    "code": {"_code": "NF", "_err": null},
    "key": "locations__country_norfolk_island"
}, {
    "name": "Northern Mariana Islands",
    "code": {"_code": "MP", "_err": null},
    "key": "locations__country_northern_mariana_islands"
}, {"name": "Norway", "code": {"_code": "NO", "_err": null}, "key": "locations__country_norway"}, {
    "name": "Oman",
    "code": {"_code": "OM", "_err": null},
    "key": "locations__country_oman"
}, {
    "name": "Pakistan",
    "code": {"_code": "PK", "_err": null},
    "key": "locations__country_pakistan"
}, {
    "name": "Palau",
    "code": {"_code": "PW", "_err": null},
    "key": "locations__country_palau"
}, {
    "name": "Papua New Guinea",
    "code": {"_code": "PG", "_err": null},
    "key": "locations__country_papua_new_guinea"
}, {
    "name": "Paraguay",
    "code": {"_code": "PY", "_err": null},
    "key": "locations__country_paraguay"
}, {
    "name": "Peru",
    "code": {"_code": "PE", "_err": null},
    "key": "locations__country_peru"
}, {
    "name": "Philippines",
    "code": {"_code": "PH", "_err": null},
    "key": "locations__country_philippines"
}, {
    "name": "Pitcairn",
    "code": {"_code": "PN", "_err": null},
    "key": "locations__country_pitcairn"
}, {
    "name": "Poland",
    "code": {"_code": "PL", "_err": null},
    "key": "locations__country_poland"
}, {
    "name": "Portugal",
    "code": {"_code": "PT", "_err": null},
    "key": "locations__country_portugal"
}, {
    "name": "Puerto Rico",
    "code": {"_code": "PR", "_err": null},
    "key": "locations__country_puerto_rico"
}, {"name": "Qatar", "code": {"_code": "QA", "_err": null}, "key": "locations__country_qatar"}, {
    "name": "Reunion",
    "code": {"_code": "RE", "_err": null},
    "key": "locations__country_reunion"
}, {
    "name": "Romania",
    "code": {"_code": "RO", "_err": null},
    "key": "locations__country_romania"
}, {
    "name": "Russian Federation",
    "code": {"_code": "RU", "_err": null},
    "key": "locations__country_russia"
}, {
    "name": "Rwanda",
    "code": {"_code": "RW", "_err": null},
    "key": "locations__country_rwanda"
}, {
    "name": "Saint Helena",
    "code": {"_code": "SH", "_err": null},
    "key": "locations__country_saint_helena"
}, {
    "name": "Saint Kitts and Nevis",
    "code": {"_code": "KN", "_err": null},
    "key": "locations__country_saint_kitts_and_nevis"
}, {
    "name": "Saint Lucia",
    "code": {"_code": "LC", "_err": null},
    "key": "locations__country_saint_lucia"
}, {
    "name": "Saint Pierre and Miquelon",
    "code": {"_code": "PM", "_err": null},
    "key": "locations__country_saint_pierre_and_miquelon"
}, {
    "name": "Saint Vincent and the Grenadines",
    "code": {"_code": "VC", "_err": null},
    "key": "locations__country_saint_vincent_and_the_grenadines"
}, {
    "name": "Samoa",
    "code": {"_code": "WS", "_err": null},
    "key": "locations__country_samoa"
}, {
    "name": "San Marino",
    "code": {"_code": "SM", "_err": null},
    "key": "locations__country_san_marino"
}, {
    "name": "Sao Tome and Principe",
    "code": {"_code": "ST", "_err": null},
    "key": "locations__country_sao_tome_and_principe"
}, {
    "name": "Saudi-Arabia",
    "code": {"_code": "SA", "_err": null},
    "key": "locations__country_saudi_arabia"
}, {
    "name": "Senegal",
    "code": {"_code": "SN", "_err": null},
    "key": "locations__country_senegal"
}, {
    "name": "Seychelles",
    "code": {"_code": "SC", "_err": null},
    "key": "locations__country_seychelles"
}, {
    "name": "Sierra Leone",
    "code": {"_code": "SL", "_err": null},
    "key": "locations__country_sierra_leone"
}, {
    "name": "Singapore",
    "code": {"_code": "SG", "_err": null},
    "key": "locations__country_singapore"
}, {
    "name": "Slovakia",
    "code": {"_code": "SK", "_err": null},
    "key": "locations__country_slovakia"
}, {
    "name": "Slovenia",
    "code": {"_code": "SI", "_err": null},
    "key": "locations__country_slovenia"
}, {
    "name": "Solomon Islands",
    "code": {"_code": "SB", "_err": null},
    "key": "locations__country_solomon_islands"
}, {
    "name": "Somalia",
    "code": {"_code": "SO", "_err": null},
    "key": "locations__country_somalia"
}, {
    "name": "South Africa",
    "code": {"_code": "ZA", "_err": null},
    "key": "locations__country_south_africa"
}, {
    "name": "South Georgia &amp; Sandwich Islands",
    "code": {"_code": "GS", "_err": null},
    "key": "locations__country_south_georgia_and_sandwich_islands"
}, {
    "name": "Spain",
    "code": {"_code": "ES", "_err": null},
    "key": "locations__country_spain"
}, {
    "name": "Sri Lanka",
    "code": {"_code": "LK", "_err": null},
    "key": "locations__country_sri_lanka"
}, {"name": "Sudan", "code": {"_code": "SD", "_err": null}, "key": "locations__country_sudan"}, {
    "name": "Suriname",
    "code": {"_code": "SR", "_err": null},
    "key": "locations__country_suriname"
}, {
    "name": "Svalbard and Jan Mayen",
    "code": {"_code": "SJ", "_err": null},
    "key": "locations__country_svalbard_and_jan_mayen"
}, {
    "name": "Swaziland",
    "code": {"_code": "SZ", "_err": null},
    "key": "locations__country_swaziland"
}, {
    "name": "Sweden",
    "code": {"_code": "SE", "_err": null},
    "key": "locations__country_sweden"
}, {
    "name": "Switzerland",
    "code": {"_code": "CH", "_err": null},
    "key": "locations__country_switzerland"
}, {
    "name": "Syrian Arab Republic",
    "code": {"_code": "SY", "_err": null},
    "key": "locations__country_syrian_arab_republic"
}, {
    "name": "Taiwan",
    "code": {"_code": "TW", "_err": null},
    "key": "locations__country_taiwan"
}, {
    "name": "Tajikistan",
    "code": {"_code": "TJ", "_err": null},
    "key": "locations__country_tajikistan"
}, {
    "name": "Tanzania",
    "code": {"_code": "TZ", "_err": null},
    "key": "locations__country_tanzania"
}, {
    "name": "Thailand",
    "code": {"_code": "TH", "_err": null},
    "key": "locations__country_thailand"
}, {
    "name": "Timor-Leste",
    "code": {"_code": "TL", "_err": null},
    "key": "locations__country_timor_leste"
}, {"name": "Togo", "code": {"_code": "TG", "_err": null}, "key": "locations__country_togo"}, {
    "name": "Tokelau",
    "code": {"_code": "TK", "_err": null},
    "key": "locations__country_tokelau"
}, {
    "name": "Tonga",
    "code": {"_code": "TO", "_err": null},
    "key": "locations__country_tonga"
}, {
    "name": "Trinidad and Tobago",
    "code": {"_code": "TT", "_err": null},
    "key": "locations__country_trinidad_and_tobago"
}, {
    "name": "Tunisia",
    "code": {"_code": "TN", "_err": null},
    "key": "locations__country_tunisia"
}, {
    "name": "Turkey",
    "code": {"_code": "TR", "_err": null},
    "key": "locations__country_turkey"
}, {
    "name": "Turkmenistan",
    "code": {"_code": "TM", "_err": null},
    "key": "locations__country_turkmenistan"
}, {
    "name": "Turks and Caicos Islands",
    "code": {"_code": "TC", "_err": null},
    "key": "locations__country_turks_and_caicos_islands"
}, {"name": "Tuvalu", "code": {"_code": "TV", "_err": null}, "key": "locations__country_tuvalu"}, {
    "name": "Uganda",
    "code": {"_code": "UG", "_err": null},
    "key": "locations__country_uganda"
}, {
    "name": "Ukraine",
    "code": {"_code": "UA", "_err": null},
    "key": "locations__country_ukraine"
}, {
    "name": "United Arab Emirates",
    "code": {"_code": "AE", "_err": null},
    "key": "locations__country_uae"
}, {
    "name": "United Kingdom",
    "code": {"_code": "GB", "_err": null},
    "key": "locations__country_united_kingdom"
}, {
    "name": "United States",
    "code": {"_code": "US", "_err": null},
    "key": "locations__country_usa"
}, {
    "name": "United States Minor Outlying Islands",
    "code": {"_code": "UM", "_err": null},
    "key": "locations__country_united_states_minor_outlying_islands"
}, {
    "name": "Uruguay",
    "code": {"_code": "UY", "_err": null},
    "key": "locations__country_uruguay"
}, {
    "name": "Uzbekistan",
    "code": {"_code": "UZ", "_err": null},
    "key": "locations__country_uzbekistan"
}, {
    "name": "Vanuatu",
    "code": {"_code": "VU", "_err": null},
    "key": "locations__country_vanuatu"
}, {
    "name": "Venezuela",
    "code": {"_code": "VE", "_err": null},
    "key": "locations__country_venezuela"
}, {
    "name": "Vietnam",
    "code": {"_code": "VN", "_err": null},
    "key": "locations__country_vietnam"
}, {
    "name": "Virgin Islands, British",
    "code": {"_code": "VG", "_err": null},
    "key": "locations__country_virgin_islands_british"
}, {
    "name": "Virgin Islands, U.S.",
    "code": {"_code": "VI", "_err": null},
    "key": "locations__country_virgin_islands_us"
}, {
    "name": "Wallis and Futuna",
    "code": {"_code": "WF", "_err": null},
    "key": "locations__country_wallis_and_futuna"
}, {
    "name": "Western Sahara",
    "code": {"_code": "EH", "_err": null},
    "key": "locations__country_western_sahara"
}, {"name": "Yemen", "code": {"_code": "YE", "_err": null}, "key": "locations__country_yemen"}, {
    "name": "Zambia",
    "code": {"_code": "ZM", "_err": null},
    "key": "locations__country_zambia"
}, {"name": "Zimbabwe", "code": {"_code": "ZW", "_err": null}, "key": "locations__country_zimbabwe"}];

let btnFlags = document.querySelector('#s_filter_button');
let flagsUl = document.querySelector('#s_live_filter_items_list');
let flgControls = document.querySelector('#s_live_filter_items_list_controls');
let inpSer = document.querySelector('#s_list_filter');
let lises = $('#s_live_filter_items_list li');
function flagsControl() {
    if (flagsUl) {
        u.forEach((bt, k) => {
            var t = document.createElement("li");
            t.setAttribute("data-id", u[k].code._code), t.setAttribute("data-value", u[k].name);
            var r = document.createElement("a");
            r.link = "javascript:;", r.title = u[k].name;
            var n = document.createElement("span");
            n.className = "text", n.textContent = u[k].name;
            var i = document.createElement("span");
            i.className = "flag flag-" + u[k].code._code.toLowerCase();
            t.addEventListener("click", function () {
                btnFlags.innerHTML = t.getAttribute("data-value");
                btnFlags.setAttribute("data-id", t.dataset.id);
                flagsUl.classList.remove("active");
                flgControls.classList.remove("active");
                btnFlags.classList.remove("opened");
                $('#fieldlocation input').val(btnFlags.innerHTML);
            });
            r.appendChild(n);
            r.appendChild(i);
            t.appendChild(r);
            flagsUl.appendChild(t);
        });

        btnFlags.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();



            flagsUl.classList.add("active");
            flgControls.classList.add("active");
            btnFlags.classList.add("opened")
        });


        inpSer.addEventListener('input', function () {
            lises = $('#s_live_filter_items_list li');
            var input, filter, ul, li, a, i, txtValue;
            for (let i = 0; i < lises.length; i++) {

                a = lises[i].querySelector(".text");
                console.log(a);
                txtValue = a.textContent || a.innerText;
                filter = inpSer.value.toLowerCase();
                console.log(txtValue);
                console.log(filter);
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    lises[i].classList.remove('filter-hidden');
                } else {
                    lises[i].classList.add('filter-hidden');
                }
            }
            console.log()

        });
    }


}

flagsControl();




//forms test


function prcConts() {
    if (pricingCont.length) {
        pricingCont.forEach((btn) => {
            let btn2 = btn.querySelector('.button');
            btn2.addEventListener('click', () => {
                if (btn.classList.contains('isPreferred')) {

                } else {
                    pricingCont.forEach((btn3) => {
                        btn3.classList.remove('isPreferred');
                    });
                    btn.classList.add('isPreferred');
                }
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".plans_contact_form_wrapper").offset().top
                }, 400);
            })
        })
    }
}

prcConts();

$(".btn-to-price").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#s_pricing_wrapper").offset().top
    }, 500);
});


let country = document.querySelector('#s_filter_button');
let countryCoutry = document.querySelector('#s_filter_button');
let countryList = document.querySelector('#s_live_filter_items_list_controls');


document.addEventListener('wpcf7mailsent', function (event) {
    if (event.detail.contactFormId == '8') {
        $('#s_contact_us_wrapper .contact_form').addClass('hidden');
        $('.content-footer .s_loading_animation').addClass('active');
        setTimeout(() => {
            $('.content-footer .s_loading_animation').removeClass('active');
            $('#thank8').addClass('tracking-in-expand-fwd');

            $('#thank8').addClass('active');
        }, 900)

    }
    if (event.detail.contactFormId == '263') {
        $('#s_plans_form').addClass('hidden');
        $('.content-pricing .s_loading_animation').addClass('active');

        setTimeout(() => {
            $('.content-pricing .s_loading_animation').removeClass('active');
            $('#thank263').addClass('tracking-in-expand-fwd');

            $('#thank263').addClass('active');
        }, 900)

    }
}, false);

$('input,textarea').change(function () {
    var error = 0;
    var obj = $(this);

    function checkinput(obj) {

        if (obj.closest('.wpcf7-acceptance') && !obj.is(":checked")) {
            $(obj).closest('.wpcf7-list-item').append('<div class="s_field_error">Policy must be not empty</div>');
        } else {
            $(obj).closest('.wpcf7-list-item').find('.s_field_error').remove();
        }

        obj.closest('form').find('.wpcf7-validates-as-required').each(function () {
            if ($(this).hasClass('wpcf7-not-valid')) {
                error = 1;
            }

        });
        if (!obj.closest('form').find('.wpcf7-acceptance input').is(":checked")) {
            error = 1;

        }
        if (error) {
            obj.closest('form').find('button[type="submit"]').attr('disabled', 'true');
        } else {
            obj.closest('form').find('button[type="submit"]').removeAttr('disabled');
        }
    }


    setTimeout(checkinput, 100, obj);

});

$('.pricing_container ').click(function () {
    $('.pricing_container ').removeClass('isPreferred');
    let text = document.querySelector('.content-pricing').dataset.translation;
    $('.pricing_container ').find('.button').text(text);
    $(this).addClass('isPreferred ');
    $(this).find('.button').text('Selected');
    $('#plans').val($(this).find('.pricing_label').text());

})