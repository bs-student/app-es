'use strict';


/*jshint -W079 */

var app = angular
    .module('student2studentApp', [
        'satellizer',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'picardy.fontawesome',
        'ui.bootstrap',
        'ui.router',
        'ui.utils',
        'angular-loading-bar',
        'angular-momentjs',
        'toastr',
        'oc.lazyLoad',
        'ui.select',
        'textAngular',
        'ngTable',
        'pascalprecht.translate',
        'ngParallax',
        'vcRecaptcha',
        'cgBusy',
        '720kb.socialshare',
        'jkuri.slimscroll',
        'firebase',
        'ngScrollGlue',
        'chart.js',
        'pascalprecht.translate'
//        'ngTouch',
//        'ngMessages',
//        'FBAngular',
//        'lazyModel',
//        'ui.tree',
//        'angularBootstrapNavTree',
//        'colorpicker.module',
//        'angularFileUpload',
//        'ngImgCrop',
//        'datatables',
//        'datatables.bootstrap',
//        'datatables.colreorder',
//        'datatables.colvis',
//        'datatables.tabletools',
//        'datatables.scroller',
//        'datatables.columnfilter',
//        'ui.grid',
//        'ui.grid.resizeColumns',
//        'ui.grid.edit',
//        'ui.grid.moveColumns',
//        'smart-table',
//        'angular-flot',
//        'angular-rickshaw',
//        'easypiechart',
//        'uiGmapgoogle-maps',
//        'ui.calendar',
//        'ngTagsInput',
//        'ngMaterial',
//        'localytics.directives',
//        'leaflet-directive',
//        'wu.masonry',
//        'ipsum',
//        'angular-intro',
//        'dragularModule'
//        'angular-parallax'
//        'noCAPTCHA'
//        'duScroll',
//        'ui.slimscroll'
    ])

    .run(['$rootScope', '$state', '$stateParams', 'imageStoreService' , function ($rootScope, $state, $stateParams, imageStoreService) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            event.targetScope.$watch('$viewContentLoaded', function () {
                if (toState.name != "app.bookBuy.bookSearch") {
                    angular.element('html, body, #content').animate({ scrollTop: 0 }, 200);
                }
                setTimeout(function () {
                    angular.element('#wrap').css('visibility', 'visible');

                    if (!angular.element('.dropdown').hasClass('open')) {
                        angular.element('.dropdown').find('>ul').slideUp();
                    }
                }, 200);
            });
            $rootScope.containerClass = toState.containerClass;
            imageStoreService.removeAllStoredImages();
        });
    }])

    .config(['FIREBASE_CONSTANT', function (FIREBASE_CONSTANT) {
        var config = {
            apiKey: FIREBASE_CONSTANT.API_KEY,
            authDomain: FIREBASE_CONSTANT.AUTH_DOMAIN,
            databaseURL: FIREBASE_CONSTANT.DATABASE_URL,
            storageBucket: FIREBASE_CONSTANT.STORAGE_BUCKET
        };
        firebase.initializeApp(config);
    }])

    .config(['uiSelectConfig', function (uiSelectConfig) {
        uiSelectConfig.theme = 'bootstrap';
    }])

    .config(['vcRecaptchaServiceProvider', 'VC_RECAPTCHA_CONSTANT', function (vcRecaptchaServiceProvider, VC_RECAPTCHA_CONSTANT) {
        vcRecaptchaServiceProvider.setSiteKey(VC_RECAPTCHA_CONSTANT.SITE_KEY);
        vcRecaptchaServiceProvider.setTheme(VC_RECAPTCHA_CONSTANT.THEME_STYLE);
    }])

    //angular-language
    .config(['$translateProvider', function ($translateProvider) {
        // $translateProvider.useStaticFilesLoader({
        //     prefix: 'languages/',
        //     suffix: '.json'
        // });
        //  $translateProvider.useLocalStorage();
        //  $translateProvider.preferredLanguage('es');
        //  $translateProvider.useSanitizeValueStrategy(null);

        $translateProvider.translations('en', {
            'TITLE': 'Hello',
            'FOO': 'This is a paragraph'
        });

        $translateProvider
            .translations('es', {
            // homeScreenTexts

            homeScreenTexts: {
                WHAT_DO_YOU_WANT: "¿Qué quieres hacer?",
                SELL_BOOK: "Vender libro",
                BUY_BOOK: "Comprar libro",
            },
            headerText: {
                LOGIN: "Iniciar sesión",
                DEAL_CONTACT_DETAILS: "Detalles del contacto",
                EDIT_: "Modificar",
                _BOOK_DEAL: "oferta del libro",
                HOW_STUDENT2STUDENT_WORKS:"Cómo funciona Student2Student"
            },
            aboutScreenTexts: {
                TEXTBOOK_EXCHANGE_MADE_EASY: "Intercambio Fácil Libros de Texto",
                TEXTBOOK_EXCHANGE: "Intercambio fácil",
                MADE_EASY: "Libros de texto",
                NO_MIDDLE_MAN: "SIN INTERMEDIARIOS | EN EL CAMPUS | CON COMPARATIVA DE PRECIOS",

                //MISING TEXT

        //        BUY_SELL_TEXTBOOKS_DIRECTLY_WITH_STUDENT:"Buy and sell textbooks directly with student on-campus.\n" +
        //             "No shipping, no credit cards, no hassles... All Free!",
        //         WHEN_A_TEXTBOOK_IS_NOT_YET:"When a textbook is not yet available on-campus by another student, \n" +
        // "we show you the cheapest price online amongst many bookstores.",
        //         WE_CUT_OUT_THE_MIDDLEMAN:"We cut out the middleman and let you sell and \n" +
        // "buy all your textbooks directly to other students on-campus.",
        //         WE_HELP_YOU_FIND:"We help you find a new home for all your textbooks and
        //         put money back in your pockets where it belongs!",
        //         CREATE_AN_ACCOUNT_POST:"Create an account, post the book, and sell away.
        // "Meet on-campus to do the deal."
                BUY_SELL_TEXTBOOKS_DIRECTLY_WITH_STUDENT:"Compra y vende libros de texto directamente a otros estudiantes en el campus.\n" +
                    "        sin envío, sin tarjetas de crédito, sin molestias ... ¡Todo gratis!",
                WHEN_A_TEXTBOOK_IS_NOT_YET:"Cuando un libro de texto no está todavía disponible en el campus por otro estudiante,\n" +
                                           "Te mostramos el precio más barato entre muchas librerías.\n",
                WE_CUT_OUT_THE_MIDDLEMAN:"Eliminamos al intermediario y te dejamos vender y\n" +
                                         "comprar todos sus libros de texto directamente a otros estudiantes en el campus.",
                WE_HELP_YOU_FIND:"Te ayudamos a encontrar un nuevo hogar para todos sus libros de texto y\n" +
                                 "Recuperar parte de la inversión que realizaste en ellos!",
                CREATE_AN_ACCOUNT_POST:"Crea una cuenta, publica el libro y véndelo.\n" +
                                        "Reúnete en el campus para hacer el trato.",
                SELL_TEXTBOOK: "Vender libro",
                SELL_TEXTBOOKS: "Vender libros",
                THERE_IS_NO_POINT: "¿Conservas tus libros de textos para que acumulen polvo? Véndeselos a un estudiante que los necesite y consigue dinero extra para tus gastos.",
                CHEAP_COLLEGE_TEXTBOOKS: "Libros universitarios baratos",
                WHY_PAY_FULL_PRICE: "¿Cansado de gastarte cientos de euros en Libros de texto? Compra libros usados a otros estudiantes y ahórrate un dineral.",
                PRICE_COMPARISON: "Comparativa de precios",
                IF_THERE_IS_NOBODY: "Si no encuentras tu libro de texto usado, te facilitamos una comparativa de precios en webs para que puedas comprar tu libro ya y al mejor precio.",
                DIRECTLY_ON_CAMPUS: "Directamente en el campus de tu universidad",
                OUR_SERVICE_MAKE_IT_EASY: "Con nuestro servicio podrás encontrar fácilmente libros de texto usados baratos a la vuelta de la esquina. Te conectamos con estudiantes de tu propio campus universitario para que compres y vendas tus libros directamente. Sin intermediarios ni precios inflados.",
                GET_LATEST_NEWS: "Recibe ultimas actualizaciones",
                SUBSCRIBE: "Suscríbete"
            },
            footerTexts:{
                SUBSCRIBE_NOW: "Suscríbete ahora"
            },
            conditionOfUseScreenTexts: {
                WELCOME_TO_STUDENT2STUDENT: "Bienvenido a Student2Student. Student2Student te facilita distintas funcionalidades en su página web, sujetas a las siguientes condiciones. Al visitar, realizar intercambios o comprar en Student2Student, aceptas implícitamente estas condiciones. Por favor, léelas con atención. Si no estás de acuerdo con algún término o condición incluida en nuestras Condiciones de Uso, cualquier modificación futura de las mismas o cualquier norma general incluida en ellas, o si no estás satisfecho con Student2Student, la única opción es que dejes de usarlo inmediatamente.",
                PRIVACY: "PRIVACIDAD",
                PLEASE_REVIEW_OUR_POLICY: "Por favor, revisa nuestra Política de Privacidad, que rige también tu visita a Student2Student, para entender nuestro funcionamiento.\n" +
                    "El uso de la página web Student2Student o el servicio, implican que conoces y aceptas nuestra Política de Privacidad.",
                MODIFICATIONS_TO_THIS_AGREEMENT: "MODIFICACIONES EN ESTE ACUERDO",
                WE_RESERVE_OUR_RIGHT: "Student2Student se reserva el derecho de cambiar, modificar o alterar estos términos y condiciones en cualquier momento. Las modificaciones se harán efectivas inmediatamente después de su publicación. Debes revisar este acuerdo periódicamente para mantenerte al corriente de cualquier cambio.",
                ELECTRONIC_COMMUNICATIONS: "COMUNICACIONES ELECTRÓNICAS",
                WHEN_YOU_VISIT_STUDENT2STUDENT: "Cuando visitas Student2Student o nos envías un email, te comunicas con nosotros electrónicamente. Aceptas recibir comunicaciones electrónicas de nuestra parte. De igual manera, nosotros nos comunicaremos contigo por email o publicando avisos en esta página. Aceptas que todos los acuerdos, avisos, divulgaciones y otras comunicaciones que te enviemos electrónicamente cumplen cualquier requerimiento legal que pueda requerirse para comunicaciones por escrito.",
                COPYRIGHT: "DERECHOS DE AUTOR",
                ALL_CONTECT_INCLUDED: "Todo el contenido incluido en esta página web, ya sea texto, gráficos, logos, íconos de botones, imágenes, clips de audio, descargas digitales, compilaciones de datos y software son propiedad de Student2Student o sus proveedores de contenido. La compilación de todo el contenido en esta web es propiedad exclusiva de Student2Student. Todo el software utilizado es propiedad de Student2Student o de sus proveedores.",
                LICENSE_AND_SITE_ACCESS: "LICENCIA Y ACCESO A LA PAGINA",
                STUDENT2STUDENT_GRANTS_YOU: "Student2Student te otorga una licencia limitada para acceder y hacer uso personal de esta página y no descargarla (además de guardar páginas en el caché de tu navegador) ni modificarla, en su totalidad o parcialmente, excepto con un permiso expreso por escrito de Student2Student. Esta licencia no incluye ningún uso de reventa ni comercial de esta página o sus contenidos; cualquier colección y uso de cualquier enumeración, descripción o precios de productos; cualquier uso derivado de esta página o sus contenidos; cualquier descarga o copia de información de cuentas para el beneficio de otro comerciante; o cualquier uso para minería de datos, robots o herramientas similares de recolección y extracción de datos. Esta página o cualquier parte de ella, no puede ser reproducida, duplicada, copiada, vendida, revendida, visitada o explotada de otra forma o para cualquier otro propósito comercial, sin el consentimiento expreso por escrito de Student2Student. No usarás ninguna técnica enmarcada para ocultar ninguna marca registrada, logo o cualquier otra información de propiedad (incluyendo imágenes, texto, diseño de página o forma) de Student2Student sin consentimiento expreso y por escrito. No puedes usar ninguna meta-etiqueta, ni ningún otro \"texto oculto\", utilizando el nombre o marcas registradas de Student2Student, sin el consentimiento expreso escrito de Student2Student. Cualquier uso sin autorización implica la cancelación del permiso o licencia otorgada por Student2Student. Se te otorga un derecho limitado, revocable y no-exclusivo de crear un enlace a la página de inicio de Student2Student, siempre y cuando, el enlace no refleje a Student2Student, o sus productos o servicios, de forma falsa, engañosa, despectiva u de otra forma ofensiva.",
                YOUR_ACCOUNT: "TU CUENTA",
                IF_YOU_USE_THIS_SITE: "Si usas esta página, eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y restringir el acceso a tu ordenador personal. Aceptas la responsabilidad por todas las actividades que ocurran con tu cuenta o contraseña. Si eres menor de 18 años, puedes usar Student2Student sólo con la participación de un padre o tutor. Student2Student se reserva el derecho de rehusar el servicio, cerrar cuentas, eliminar o editar contenido o cancelar órdenes.",
                REVIEWS_COMMENTS_COMMUNICATIONS: "RESEÑAS, COMENTARIOS, COMUNICACIONES, Y OTROS CONTENIDOS",
                VISITORS_MAY_POST_RECIEWS: "Los usuarios de la página pueden publicar reseñas, comentarios, fotos, y otros contenidos; otras comunicaciones así como enviar sugerencias, ideas, comentarios, preguntas u otra información, siempre y cuando el contenido no sea ilegal, obsceno, amenazante, difamatorio, invasivo de la privacidad, contenido que infrinja derechos de propiedad intelectual, injurioso frente a terceros u objetable, y no consiste en o contiene virus de software, campañas políticas, ofertas comerciales, correo en cadena, correos masivos, o cualquier otro tipo de \"spam\". No puedes usar una dirección de email falsa, suplantar a ninguna persona o entidad, o engañar de otra forma el origen de una tarjeta u otro contenido. Student2Student se reserva el derecho (pero no la obligación) de eliminar o editar contenido de este tipo, pero no revisa regularmente el contenido publicado.",
                IF_YOU_DO_POST: "Si publicas contenido o subes material, a menos que te indiquemos lo contrario, otorgas a Student2Student el derecho no-exclusivo, libre de derechos perpetuo, irrevocable y completamente sublicenciable, de usar, reproducir, modificar, adaptar, publicar, traducir, usar para crear trabajos derivados, distribuir, y mostrar dicho contenido al mundo por cualquier medio. Otorgas a Student2Student y sub-licenciados el derecho de usar el nombre que subas en conexión con ese contenido, si ellos deciden hacerlo. Garantizas que posees o de otra forma tienes control, sobre todos los derechos del contenido que publicas; que el contenido es preciso; que el uso del contenido que provees no viola esta política y no le causa daño a ninguna persona o entidad y que indemnizarás a Student2Student por cualquier demanda que se dé por el contenido que publicas. Student2Student tiene el derecho, pero no la obligación, de monitorizar y editar o eliminar cualquier actividad o contenido. Student2Student no se hace responsable de ningún contenido publicado por ningún usuario. Aceptas que Student2Student no pre-filtra o aprueba el contenido, pero que Student2Student tendrá el derecho (pero no la obligación) bajo su sola discreción de rechazar, borrar o desplazar cualquier contenido que se encuentre disponible en el servidor, por violar la letra o espíritu de las Condiciones de Uso, o por cualquier otra razón.",
                THIRD_PARTY_CONTENT: "CONTENIDO, SITIOS Y SERVICIOS DE TERCEROS",
                THE_STUDENT2STUDENT_SITE: "El sitio Student2Student y el contenido disponible a través del servicio puede incluir características y funcionalidades que podrían enlazarlo a, o proveerle acceso a contenido de terceros que es completamente independiente de Student2Student, incluyendo sitios web, directorios, servidores, redes, sistemas, información y bases de datos, aplicaciones, software, programas, productos o servicios, e Internet como tal.",
                YOUR_INTERACTIONS_WITH_ORGANIZATION: "Tus interacciones con organizaciones y/o personas encontradas a través del servicio, incluyendo el pago y entrega de bienes y servicios y cualquier otro término, condición, garantía o representación asociada con transacciones, son enteramente y a todos los efectos entre tú y esas organizaciones y/o personas. Deberías  investigar tanto como creas necesario o apropiado antes de realizar cualquier transacción online o en el mundo real con cualquiera de estos terceros.",
                YOU_AGREE_THAT_STUDENT2STUDENT: "Declaras estar de acuerdo con que Student2Student no se hará responsable por ninguna pérdida o daño de ningún tipo que se produzca como resultado de cualquier transacción con terceros. Si se produce una disputa entre los participantes de esta página, o entre los usuarios y algún tercero, entiendes y estás de acuerdo con que Student2Student no tiene obligación de involucrarse. En caso de que tengas una disputa con uno o más usuarios, renuncias a que Student2Student, sus oficiales, empleados, agentes y sucesores, en derechos de reclamaciones, demandas y daños (actuales y futuros de cualquier tipo de naturaleza, conocidos o desconocidos, sospechados o insospechados, divulgados o no-divulgados, dándose por, o de alguna forma, relacionados con esas disputas y/o nuestro servicio. Si resides en California, renuncias a la Sección 1542 del Código Civil de California, que dice que: \"Una renuncia general no se extiende a declaraciones en las que el acreedor no conoce o sospecha que existen a su favor en el momento de ejecutar la renuncia, la cual, si se conoce por él o ella, debe haber afectado materialmente este acuerdo con el deudor.\"",
                CONDUCT: "CONDUCTA",
                YOU_AGREE_NOT_TO_POST: "Aceptas no publicar, enviar por email, o de otra forma hacer disponible contenido:",
                THAT_IS_UNLAWFUL: "que sea ilegal, dañino, amenazante, abusivo, acosador, difamatorio, calumnioso, invasivo de la privacidad de otros, o que de cualquier forma sea dañino para menores.",
                THAT_IS_PORNOGRAPHIC: "que sea pornográfico o muestre a un humano realizando actividades sexuales reales.",
                THAT_HARNESSES: "que acose, degrade, intimide o exprese odio hacia una persona o grupo de personas con base a su religión, sexo, orientación sexual, raza, etnia, edad, o incapacidad;",
                THAT_VIOLATES_THE_FAIR: "que viole la Ley de Equidad de Vivienda al declarar, en cualquier aviso o anuncio para la venta o renta de cualquier vivienda, una preferencia discriminatoria basada en raza, color, origen nacional, religión, sexo, estado familiar, o incapacidad (o viole cualquier ley estatal o local que prohíbe la discriminación basada en éstas u otras características);",
                THAT_VIOLATES_FEDERAL_LAW: "que viole las leyes de oportunidad de empleo estatales o locales, incluyendo, pero no limitado a, declarar en cualquier anuncio para empleo una preferencia o requerimiento basada en raza, color, religión, sexo, origen nacional, edad o incapacidad.",
                THAT_INCLUDES_PERSONAL_INFO: "que incluya información personal o de identificación sobre otra persona, sin el consentimiento expreso de dicha persona;",
                THAT_IS_FALSE: "que sea falso, engañoso, que proporcione información incorrecta, o que constituya un señuelo para garantizar el cambio;",
                THAT_INFRINGES_ANY_PATENT: "que infrinja alguna patente, marca registrada, secreto comercial, derecho de autor, u otros derechos de propiedad de alguna entidad, o contenido el cual no tienes derecho a hacer disponible bajo ninguna ley, o bajo relaciones contractuales o fideicomisarias;",
                THAT_CONSTITUTES_OR_CONTAINS_AFFILIATE: "que constituya o contenga \"marketing de afiliación\", \"códigos de referido\", \"correo basura\", \"spam\", \"correos de cadena\", \"planes piramidales\", o anuncios comerciales no solicitados;",
                THAT_CONSTITUTES_OR_CONTAINS_SOCIALIZATION: "que constituya o contenga alguna forma de anuncio o reclamo comercial.",
                THAT_INCLUDES_LINKS: "que incluya enlaces a servicios o sitios web comerciales, excepto cuando sea permitido por Student2Student.",
                THAT_CONTAINS_SOFTWARE: "que contenga virus de software o cualquier código de ordenador, archivos, o programas diseñados para interrumpir, destruir o limitar la funcionalidad de cualquier software, hardware, o equipo de telecomunicaciones;",
                THAT_DISRUPTS: "que perturbe el flujo normal de diálogo con una cantidad excesiva de contenido (ataque de desbordamiento) al servidor, o que de otra forma afecte negativamente la capacidad de otros usuarios de usar el servicio; o",
                THAT_EMPLOYS: "que emplee direcciones de email engañosas, o cabeceras forzadas o de otra forma identificadores manipulados, para disfrazar el origen del contenido transmitido a través del servicio.",
                ADDITIONALLY_YOU_AGREE: "Adicionalmente, aceptas no:",
                CONTACT_ANYONE_WHO_ASKED: "contactar a cualquier persona que haya pedido no ser contactado, ni realizar contactos no solicitados con fines comerciales con nadie;",
                STALK_OR_OTHERWISE: "acechar o de otra forma acosar a nadie;",
                COLLECT_PERSONAL_DATA: "recabar datos personales sobre otros usuarios para propósitos comerciales o ilegales;",
                USE_AUTOMATED_MEANS: "usar métodos automáticos, incluyendo arañas web, robots, rastreadores, herramientas de extracción de datos, o similares, para descargar datos del servicio. A menos que sea expresamente permitido por Student2Student;",
                POST_NON_LOCAL: "Publicar contenido no-local, o de otra forma irrelevante, publicando repetidamente contenido similar o el mismo, o de otra forma imponiendo una carga irrazonable o desproporcionada sobre nuestra infraestructura;",
                ATTEMPT_TO_GAIN_UNAUTHORIZED: "Intentar obtener acceso no autorizado a los sistemas de Student2Student, o participar en cualquier actividad que perturbe, reduzca la calidad, interfiera con el funcionamiento o funcionalidad de Student2Student o el servicio del página web de Student2Student; o",
                USE_ANY_FORM_OF_AUTOMATED_DFEVICE: "Usar ningún dispositivo automático ni programa de ordenador de ningún tipo que permita subir publicaciones a Student2Student sin que cada publicación sea publicada manualmente por el autor (un \"dispositivo de publicación automática\"), incluyendo, sin limitación, el uso de un dispositivo de publicación automática como  para subir publicaciones masivamente, o para subir publicaciones automáticas en intervalos regulares.",
                NO_SPAM_POLICY: "POLÍTICA DE CERO SPAM",
                YOU_UNDERSTAND_AND_AGREE: "Entiendes y estás de acuerdo conque enviar anuncios no solicitados por email a las direcciones de email de Student2Student o a través de los sistemas de Student2Student, está expresamente prohibido por estas condiciones. Cualquier uso sin autorización de los sistemas de Student2Student es una violación de estas condiciones.",
                LIMITATIONS_ON_SERVICE: "LIMITACIONES del servicio",
                YOU_ACKNOWLEDGE_THAT_STUDENT2STUDENT: "Aceptas que Student2Student pueda establecer límites en cuanto al uso de este servicio, incluyendo el número máximo de días que el contenido sea conservado por el servicio, el número máximo y tamaño de publicaciones, mensajes de email y otros contenidos que pueden ser transmitidos o guardados por el servicio y la frecuencia con la cual podrías acceder al servicio. Aceptas que Student2Student no se hace responsable de la eliminación o fallo de almacenamiento de cualquier contenido conservado o transmitido por el servicio. Aceptas que Student2Student se reserva el derecho, en cualquier momento, de modificar o descontinuar el servicio (o cualquier parte de este), con o sin previo aviso y que Student2Student no se responsabilizará, de cualquier modificación, suspensión o interrupción del servicio.",
                TERMINATION_OF_SERVICE: "FINALIZACION DE SERVICIO",
                YOU_AGREE_THAT_IN_ITS_SOLE_DIRECTION: "Estás de acuerdo con que Student2Student, bajo su única discrecionalidad tiene el derecho (pero no la obligación) de borrar o desactivar tu cuenta, bloquear tu email o dirección IP u otra forma de finalizar tu acceso al servicio, o la utilización del mismo (o cualquier parte de este), inmediatamente y sin previo aviso, y eliminar y/o descartar cualquier contenido dentro de éste, por cualquier razón, incluyendo, la no limitación, en caso de que Student2Student crea que has actuado de forma inconsistente con las Condiciones de Uso. Además, aceptas que Student2Student no se hará responsable de cualquier finalización del servicio. Adicionalmente, estás de acuerdo con no intentar utilizar el servicio después de dicha finalización",
                COPYRIGHT_COMPLAINTS: "RECLAMACIONES DE DERECHOS DE AUTOR",
                STUDENT2STUDENT_RESPECTS_INTELLECTUAL_PROPERTY: "Student2Student respeta la propiedad intelectual de otros. Si crees que tu trabajo ha sido copiado de alguna forma que constituya una violación de derechos de autor, por favor ponte en contacto e informa a Student2Student.",
                PRODUCT_DESCRIPTIONS: "DESCRIPCIONES DE PRODUCTOS",
                STUDENT2STUDENT_ATTEMPTS: "Student2Student intenta ser tan preciso como sea posible. Sin embargo, no garantiza que las descripciones de productos, u otros contenidos en esta página, sean exactas, completas, fiables actuales o estén libres de errores.",
                PRICING: "PRECIOS",
                PLEASE_NOTE_STUDENT2STUDENT_DOES_NOT_SELL: "Por favor, ten en cuenta que Student2Student no vende ningún producto. Puedes comprar a terceros usando la plataforma Student2Student. Student2Student no se hace responsable del precio ofrecido por otros vendedores, en caso de que un artículo tenga un precio equivocado.",
                OTHER_BUSINESSES: "OTROS NEGOCIOS",
                PARTIES_OTHER_THEN_STUDENT2STUDENT: "Entidades diferentes a Student2Student ofrecen servicios o venden productos en esta página. Además facilitamos enlaces a páginas de compañías afiliadas. No nos hacemos responsables de examinar ni evaluar los productos, tampoco ofrecemos ninguna garantía sobre los productos o servicios ofrecidos por terceros en sus páginas web. Student2Student no asume ninguna responsabilidad por las acciones, productos y contenidos de todos estos y cualquier otro tercero. Deberías revisar cuidadosamente sus políticas de privacidad y otras condiciones de uso.",
                DISCLAIMER_OF_WARRANTIES_AND_LIMITATION: "RENUNCIA DE GARANTÍAS Y LIMITACIÓN DE RESPONSABILIDAD",
                THIS_SITE_AND_ALL_INFORMATION: "EN CUANTO A LA OPERACIÓN DE ESTA PAGINA O LA INFORMACIÓN, CONTENIDO, MATERIALES, PRODUCTOS (INCLUYENDO SOFTWARE) O SERVICIOS INCLUIDOS O DE OTRA FORMA PUESTOS A DIPOSICIÓN, A TRAVÉS DE ESTA PÁGINA, A MENOS QUE SE ESPECIFIQUE LO CONTRARIO POR ESCRITO. ACEPTAS EXPRESAMENTE QUE USAS ESTA PÁGINA BAJO TU PROPIO RIESGO. HASTA EL MAYOR ALCANCE PERMITIDO POR LA LEY APLICABLE, Student2Student RENUNCIA A TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS. Student2Student NO GARANTIZA QUE ESTA PÁGINA; SU INFORMACIÓN, CONTENIDO, MATERIALES, PRODUCTOS (INCLUYENDO SOFTWARE) O SERVICIOS INCLUIDOS EN, O DE OTRA FORMA PUESTOS A TU DISPOSICÓNN A TRAVÉS DE ESTA PAGINA; SUS SERVIDORES; O EMAILS ENVIADOS DESDE Student2Student, ESTÉN LIBRES DE VIRUS U OTROS COMPONENTES DAÑINOS. Student2Student NO SE HARÁ RESPONSABLE DE NINGÚN DAÑO DE NINGÚN TIPO QUE SE DÉ POR EL USO DE ESTA PAGINA O CUALQUIER INFORMACIÓN, CONTENIDO, MATERIALES, PRODUCTOS (INCLUYENDO SOFTWARE) O SERVICIOS INCLUIDOS EN, O DE OTRA FORMA PUESTOS A TU DISPOSICIÓN A TRAVÉS DE ESTA PÁGINA, INCLUYENDO, PERO NO LIMITADO A, DAÑOS DIRECTOS, INDIRECTOS, INCIDENTALES, PUNITIVOS Y CONSIGUIENTES, A MENOS QUE SE ESPECIFIQUE LO CONTRARIO POR ESCRITO. CIERTAS LEYES ESTATALES NO PERMITEN LIMITACIONES EN GARANTÍAS IMPLÍCITAS O LA EXCLUSIÓN O LIMITACIÓN DE CIERTOS DAÑOS. SI ESTAS LEYES SE APLICAN A TI, ALGUNOS O TODOS LOS DESCARGOS DE RESPONSABILIDAD, EXCLUSIONES, O LIMITACIONES ANTERIORES, PUEDEN NO SER APLICABLES, Y PODRÍAN TENER DERECHOS ADICIONALES.",
                APPLICABLE_LAW: "LEY APLICABLE",
                BY_VISITING_STUDENT2STUDENT: "Al visitar Student2Student, aceptas las leyes del estado de Zurich en Suiza, sin consideración a los principios de conflicto de las leyes, gobernarán estas Condiciones de Uso y cualquier disputa de cualquier tipo que puedan generarse entre tú y Student2Student.",
                SITE_POLICIES_MODIFICATION_AND_SEVERABILITY: "POLÍTICAS DEL SITIO, MODIFICACIÓN Y DIVISIBILIDAD",
                PLEASE_REVIEW_OUR_POLICY_POSTED_HERE: "Por favor, revisa nuestras otras políticas publicadas en esta página. Estas políticas también son válidas si visitas Student2Student. Nos reservamos el derecho de hacer cambios en nuestro sitio, políticas, y en las Condiciones de Uso, en cualquier momento. Si cualquiera de esas condiciones fuera declarada inválida, nula, o no aplicable por cualquier motivo, tal condición se considerará independiente de todas las restantes."
            },
            buyBookScreenTexts: {
                BUY_BOOKS:"Comprar libros",
                BUY: "Comprar ",
                TEXTBOOK: "Libros de texto",
                SEARCH_YOU_BOOK_BY: "Búsqueda de libros por",
                TITLE_AUTHOR_ISBN_KEYWORDS:"titulo / Autor / ISBN / Palabras",
                SORT_BY: "Clasificar por",
                TITLE: "Título",
                AUTHOR: "Autor",
                ISBN:"ISBN",
                LOWEST_ONLINE_PRICE: "Precio online más bajo",
                LIST_PRICE: "Lista de Precios",
                REMOVE_FROM_WISHLIST: "Eliminar de lista de favoritos",
                ADD_TO_WISHLIST: "Guardar en favoritos",
                CONTACT_STUDENT_ON_CAMPUS: "Contactar vendedor local con el precio más bajo",
                BUY_FROM_CHEAPEST_ONLINE_STORE: "Ir a tienda online más barata",
                BUY_FROM_AMAZON: "Comprar en Amazon",
                EDITION: "Edición",
                PUBLISHER: "Editorial",
                PUBLISH_DATE: "Fecha de publicación",
                PAGE: "Páginas",
                BINDING: "Encuadernación",
                DETAILS: "Detalles",
                READ_MORE: "Leer más",
                READ_LESS: "Leer menos",
                STUDENT_ON_CAMPUS_DEALS: "Ofertas estudiantes en campus",
                ONLINE_STORES_NEW_DEALS: "Ofertas nuevas Tiendas Online",
                ONLINE_STORE_USED_DEALS: "Ofertas usadas Tiendas Online ",
                SELLER_STUDENT: "Vendedores (Estudiante)",
                ONLINE_STORES_NEW: "Tiendas Online :Nuevas",
                ONLINE_STORE:"Tienda Online",
                ONLINE_STORES_USED: "Tiendas Online :Utilizadas",
                SELLER: "El vendedor",
                WILL_CONTACT_YOU: "se pondrá en contacto contigo (Comprador)",
                THE_SELLER: "El vendedor",
                OF_THIS_BOOK_WANTS: "de este libro de texto quiere contactar contigo. A continuación, facilita tu información de contacto. Nosotros se la enviaremos al vendedor para que posteriormente se ponga en contacto contigo. También tienes la opción de enviar un mensaje al vendedor.",
                YOU_NEED_TO_CONTACT_SELLER: "Por favor, (Comprador) contacta con el Vendedor (",
                THE_SELLER_OF_THIS_BOOK_WANTS_YOU: "El vendedor ({{username}}) de este libro de texto",
                YOU_TO_CONATCT:"quiere que contactes con él.",
                PROVIDE_YOUR_EMAIL_BELOW:"Por favor, envía tu email para que podamos enviarte los datos de contacto del vendedor. También puedes enviar un mensaje al vendedor.",
                SEND_MESSAGE_TO_SELLER: "Enviar mensajes a ({{userName}}) través del tablero de mensajes de Student2Student",
                IN_THIS_METHOD_YOU_AND_SELLER: "Con este sistema, tú y el vendedor podéis enviaros mensajes través del tablero de mensajes de Student2Student. Así podrás realizar el intercambio con el vendedor sin necesidad de proporcionar ninguna información personal como número de teléfono, dirección de correo electrónico, compartir ubicación, hora, etc..",
                SORRY_NO_BOOK_DEALS_OF_STUDENT_ARE_FOUND: "Actualmente no hay ninguna oferta en el campus.",
                YOU_HAVE_TO_LOGIN_TO_SEE: "Inicia sesión y encuentra ofertas de libros en tu campus",
                SORRY_NO_ONLINE_DEALS_AVAILABLE: "Lo sentimos, no se ha encontrado ninguna oferta del libro online.",
                NEW_BY_AMAZON: "Nuevo de Amazon",
                LOWEST_PRICE_ONLINE: "Precios más bajos Online",
                LOCAL_CAMPUS_PRICE: "Precios en el campus local",
                NO_STUDENT_AT_IS_SELLING_THIS_BOOK: "'Ningún estudiante en {{universityName}} vende este libro de texto en el campus.'",
                CONDITION_DETAILS: "Condición / Detalles",
                HIGHLIGHT_IN_TEXTBOOK: "Texto subrayado",
                HIGHLIGHTS:"Reflejos",
                NOTES:"Notas",
                NOTES_IN_TEXTBOOK: "Anotaciones en el libro de texto",
                AVAILABLE: "Disponible",
                PRICE: "Precio",
                SHIPPING_PRICE: "Precio de envío",
                ITEM_PRICE: "Precio del artículo",
                TOTAL_PRICE: "Precio Total"

            },
            sellBookScreenTexts: {
                SELL_YOUR: "Venta ",
                TEXTBOOK: "libros de texto",
                DONT_WASTE_TIME: "No pierdas un minuto. Vende tus libros de texto a otros estudiantes",
                JUST_ENTER_THE_ISBN:"Sólo ingrese el ISBN"

            },
            contactUsScreenTexts: {
                TELL_STUDENT2STUDENT: "Cuéntanos qué necesitas ...",
                STUDENT2STUDENT_IS_HAPPY: " Student2Student te agradece cualquier comentario que nos ayude a mejorar nuestro servicio.",
                OUR_GOAL_IS:" Nuestro objetivo es ayudar a estudiantes a ahorrar dinero en la compra de sus libros de texto ",
                WE_ARE_DEPENDING:"y a ganar dinero con los libros de texto que ya no necesiten",
                FEEDBACK: "Respuesta",
                ADMINISTRATIVE_SUPPORT: "Ayuda administrativa",
                TECHNICAL_SUPPORT: "Soporte técnico",
                SUGGESTION: "Sugerencia",
                QUESTION: "¿Alguna otra pregunta?",

            },
            disclaimerScreenTexts: {
                WELCOME_TO_STUDENT2STUDENT_INDEPENDENT_WEBSITE: "Bienvenido a Student2Student. Esta es una página web independiente, no asociada a ninguna universidad ni a ningún otro centro de educación superior. Esta página web ofrece a sus miembros funcionalidades bajo los siguientes términos y condiciones: Si visitas, realizas intercambios y/o compras en Student2Student, aceptas estos términos y condiciones tal y como están escritos, haciéndote responsable de cualquier intercambio de Libros de texto por dinero o viceversa. Por favor, lee estos términos y condiciones cuidadosamente y haz clic en Aceptar para proceder. Si visitas, realiza intercambios y / o compras en Student2Student, aceptas la cláusula de exención de responsabilidad. Por favor, léelo con atención.",
                DISCLAIMER: "Cláusula de exención de responsabilidad",
                THIS_SERVICE_OFFERS: "Student2Student no es un sitio de comercio electrónico, simplemente ofrece un mecanismo para que los estudiantes puedan conectarse virtualmente con otros estudiantes con el propósito de comprar y vender Libros de texto usados/nuevos. Student2Student NO garantiza que un comprador encuentre el libro de texto que esté buscando, ni tampoco garantiza que los libros de texto publicados en la página web se vendan por el precio indicado. Student2Student NO asume ninguna responsabilidad, ni obligación respecto al resultado final de cualquier reserva o intercambio realizado en esta página web. Adicionalmente, los miembros de la página web son completamente responsables de mantener su propia seguridad personal en tanto utilizan el servicio de dicha página para establecer el intercambio.",
                RECOMMENDATIONS_FOR_SETTING_EXCHANGES: 'RECOMENDACIONES PARA REALIZAR INTERCAMBIOS:',
                SET_EXCHANGE_ARRANGEMENTS: "Que los intercambios se realicen en lugares públicos y concurridos.",
                EXERCISE_COE: "Utiliza el método “pago en efectivo”.",
                PROVIDE_LIMITED_INFO: "Facilita información personal limitada cuando realices intercambios."
            },
            sellBookPageScreenTexts: {
                BOOK_INFORMATION: "Información del libro",
                CONTACT_METHOD: "Modo de contacto",
                DEAL_TERMS: "Términos del acuerdo",
                PERSONAL_BOOK_IMAGES: "Imágenes del libro",
                PREVIEW_AND_CONFIRM: "Vista Previa y Confirmación",
                BY: "De ",
                PUBLISHED_BY: "Publicado por",
                BOOK_CONDITION_INFORMATION: "Información acerca del estado del libro",
                CONDITION_OF_BOOK: "Estado del Libro",
                TEXT_HIGHLIGHTED: "Texto subrayado",
                NOTES_IN_TEXTBOOK: "Anotaciones del libro de texto",
                REMAINING: "Restantes: ",
                CHARACTERS: " caracteres",
                USE_STUDENT2STUDENT_MESSAGE_BOARD: "Usa el tablón de mensajes de Student2Student",
                STUDENT2STUDENT_MESSGAE_BOARD: "Tablón de mensajes de Student2Student",
                WITH_THIS_METHOD: "Con este sistema",
                NEITHER_BUYER_NOR_SELLER:"ni comprador ni vendedor reciben la información de contacto de otras personas.",
                THEY_CAN_SEND:"Pueden enviarse mensajes entre sí usando solamente el tablón de mensajes de Student2Student.",
                SELLER_CONTACT_BUYER: "Vendedor contacta con comprador",
                BUYER_WILL_NOT_GET: "el comprador no obtiene ninguna  información.",
                THE_BUYER_NEEDS_TO_SEND:" El comprador envía la información al preguntar por el libro. El sistema enviará el mensaje del comprador al siguiente email:",
                BUYER_CONTACT_SELLER: "Comprador contacta con vendedor",
                BUYER_CONTACT_SELLER_DETAILS: "Con este sistema el comprador tendrá acceso a tu información a través del email, Define qué información de contacto puede solicitar el comprador.",
                AVAILABLE_TO_PUBLIC: "Disponible para el público ",
                TEXTBOOK_AVAILABLE_DATE: "Fecha disponibilidad del libro",
                PAYMENT_METHOD: "Método de pago",
                YOU_CAN_UPLOAD_THREE_IMAGES: "Puedes subir 3 imágenes del libro para mostrar su estado.",
                RECOMMENDED_PICTURE: "(Peso de imagen recomendado: Menos de 300 KB. Tamaño de imagen recomendada: 350 x500 px).",
                ALLOWED_IMAGE_EXTENSIONS: "Extensiones de archivo de imagen permitidas: jpg / JPG, jpeg / JPEG, png / PNG.",
                NOT_PROVIDED: "No facilitado por el Vendedor",
                TEXTBOOK_AVAILABLE_TO_PUBLIC: "Libro disponible para el público",
                SELLING_PRICE: "Precio de venta",
                I_AGREE_TO_POLICY: "Por la presente confirmo que soy el dueño legítimo del libro que estoy vendiendo. Soy consciente de que otros estudiantes pueden obtener mi información de contacto dependiendo del método de contacto que elija.",
                NEW_PRICE_BY_AMAZON: "(Nuevo precio en Amazon)",
                // miss match
                YOU_ADDED_SELLER_CONTACT_BUYER: "Vendedor (Tú) Contacto Comprador",
                YOU_ADDED_BUYER_CONTACT_SELLER: "Comprador Contacto Vendedor (Tú)",
                AVAILABLE_TO_PUBLIC_DETAILS:"El libro se mostrará a los usuarios aunque no estén conectados o desde su universidad, pero solo los estudiantes de su campus pueden contactarlo."
            },
            faqScreenTexts: {
                STUDENT2STUDENT_COM: "Student2student.com",
                HOW_STUDENT2STUDENT_WORK: "¿Cómo funciona Student2Student?",
                // do recheck
                HOW_STUDENT2STUDENT_WORK_ANSWER: "https://www.youtube.com/embed/lXvwHtAXAXQ?version=3&enablejsapi=1&rel=0&autoplay=0&showinfo=1&controls=1&modestbranding=0",
               // text exist in Faqctrl file
                IS_STUDENT2STUDENT_FREE: "¿Es Student2Student realmente gratis?",
                IS_STUDENT2STUDENT_FREE_ANSWER: "Sí, Student2Student es totalmente gratis para todos los estudiantes. Puedes comprar, vender, comparar, ponerte en contacto con otros estudiante y lo tienes disponible sin ningún coste! ¡Queremos que ahorres tiempo y dinero!",
                WHY_DO_I_NEED_UNIVERSITY: "¿Por qué es necesario que te registres en tu universidad?",
                WHY_DO_I_NEED_UNIVERSITY_ANSWER: "Puedes buscar, comparar y comprar Libros de texto sin crear una cuenta en Student2Student. Algunos vendedores sólo venden a usuarios registrados, por lo que te recomendamos que te registres para poder acceder a todos los servicios. Para poder vender un libro de texto necesitas una cuenta en Student2Student, tendrás que inscribirte en la ubicación de tu universidad/campus.",
                DO_I_NEED_CREDIT_CARD: "¿Necesito una tarjeta de crédito para comprar o vender?",
                DO_I_NEED_CREDIT_CARD_ANSWER: "¡No! No necesitas tarjeta de crédito para ninguna operación en Student2Student. Nunca proporciones  información de tu tarjeta de crédito a nadie. Student2Student no la necesita para ninguna operación y tampoco los usuarios registrados de Student2Student.",
                WHAT_IS_COE: "¿Qué es el COE (Cash en Exchange)?",
                WHAT_IS_COE_ANSWER: "El concepto de efectivo en intercambio (COE) es muy sencillo. Implica que sólo se hace entrega del libro cuando el comprador hace entrega del dinero. El intercambio se realiza in situ. El comprador consigue los Libros de texto y el vendedor consigue el dinero.",
                SELLERS_HANDBOOK: "Manual del vendedor",
                HOW_DO_I_SELL_TEXTBOOK: "¿Cómo puedo vender mis Libros de texto?",
                HOW_DO_I_SELL_TEXTBOOK_ANSWER: "Es muy fácil y cómodo. Inicia sesión o regístrate, haz clic en \"Vender libros\", introduce el ISBN y establece las condiciones de la venta (precio, fecha disponible, etc.). No necesitas introducir ninguna información de los libros de texto. ¡Lo hacemos todo por ti!",
                DO_I_NEED_ACCOUNT_TO_SELL: "¿Necesito una cuenta para vender libros de texto?",
                DO_I_NEED_ACCOUNT_TO_SELL_ANSWER: "Sí, es necesario que dispongas de  una cuenta para vender tus libros de texto a otro estudiante del campus.",
                CAN_I_POST_MY_BOOKS_IN_FACEBOOK: "¿Puedo publicar mis ofertas de libros de texto en Facebook y Twitter?",
                CAN_I_POST_MY_BOOKS_IN_FACEBOOK_ANSWER: "¡Claro! Así incrementaras tus posibilidades de vender el libro de texto. Cuando vendas el libro publica también el acuerdo en Facebook o Twitter.",
                DOES_SELLER_SEE_MY_INFO: "¿El vendedor tiene acceso a mi nombre e información de contacto?",
                DOES_SELLER_SEE_MY_INFO_ANSWER: "Cuando te registras, debes crear un apodo para proteger tu nombre real. Los compradores tendrán acceso a  tu apodo al buscar libros de texto. Dependiendo de la configuración de tu oferta y de los contactos de comprador y vendedor puede ocurrir que  el vendedor contacte con el comprador, y el comprador acceda a su información de contacto definida en el acuerdo a través de un correo electrónico. En este caso, el comprador debe solicitar la información de contacto que nunca será publicada en Student2Student.",
                DO_I_NEED_TO_SHIP_TEXTBOOK: "¿Necesito enviar los libros de texto?",
                DO_I_NEED_TO_SHIP_TEXTBOOK_ANSWER: "Rotundamente, no. Nuestra intención es que el intercambio del libro de texto y el dinero se realice en el campus de tu universidad. Si un comprador te pide que envíes el libro de texto, la decisión de asumir o no el riesgo depende totalmente de ti. Student2Student no aconseja el envío de libros de texto.",
                CAN_I_SELL_TEXTBOOK_OTHER_UNIVERSITY: "¿Puedo vender libros de texto a estudiantes de otras universidades?",
                CAN_I_SELL_TEXTBOOK_OTHER_UNIVERSITY_ANSWER: "No. Los libros de texto se negocian localmente en el campus lo que ofrece una experiencia sin problemas de compra y venta de libros de texto.",
                WHAT_IS_MY_SELL_PAGE: "¿Qué es \"Mi página de venta\"?",
                WHAT_IS_MY_SELL_PAGE_ANSWER: "\"Mi página de venta\" es tu página personalizada en Student2Student. Puede ser compartida con cualquier persona en Internet. En ella sólo muestras el libro de texto que estás vendiendo en este momento Así, puedes anunciar tus propios libros de texto en Facebook o Twitter, donde tu prefieras. Lo único que tienes que hacer es compartir la URL.\n" +
                    "\n" +
                    "que será única  para tu página de venta personal: www.student2student.com/[nickname]\n" +
                    "(Ejemplo: Nickname es kittoo12.La página sería entonces: www.student2student.com/kittoo12",
                BUYERS_HANDBOOK: "Manual del comprador",
                DO_I_NEED_ACCOUNT_TO_BUY: "¿Necesito una cuenta para comprar libros de texto?",
                DO_I_NEED_ACCOUNT_TO_BUY_ANSWER: "No necesariamente. Puedes buscar, comparar y comprar libros de texto sin una cuenta en Student2Student. Algunos vendedores no venden sus libros de texto a los no miembros. Para esos casos sí  necesitarás una cuenta.",
                CAN_I_LOOKUP_PRICING_IN_AMAZON: "¿Puedo consultar los precios de Amazon y otras tiendas de libros de texto?",
                CAN_I_LOOKUP_PRICING_IN_AMAZON_ANSWER: "¡Por Supuesto! Cuando busques un libro de texto en Student2Student, verás una comparativa que te indica dónde puedes encontrar tus libros de texto, al mejor precio. ¡Ahorrar dinero te costará muy poco!",
                HOW_DO_I_PAY: "¿Cómo pago los libros?",
                HOW_DO_I_PAY_ANSWER: "Los libros de texto se venden localmente (en el campus) y deben pagarse en efectivo a la entrega del libro. El concepto con el que trabajamos es Cash on Exchange (COE).",
                I_CANT_FIND_MY_BOOK_AT_UNIVERSITY: "No puedo encontrar el libro de texto en mi universidad. ¿Que puedo hacer?",
                I_CANT_FIND_MY_BOOK_AT_UNIVERSITY_ANSWER: "En el caso poco probable de que no encuentres un libro de texto en tu zona, te ofreceremos una comparativa con información sobre donde obtener el libro al precio más económico.Sólo tienes que hacer la búsqueda y el resultado con la tabla comparativa surgirá de inmediato.",
                WHY_CANT_I_CHANGE_DEAL_AFTER_CONTACTED: "¿Por qué no puedo cambiar las condiciones de la venta de mi libro de texto una vez  que alguien me ha contactado?",
                WHY_CANT_I_CHANGE_DEAL_AFTER_CONTACTED_ANSWER: "No se trata de un error, es una funcionalidad. No puedes cambiar ciertos valores del la oferta como los precios, cuando el comprador ya ha contactado contigo para adquirir el libro, Esta norma protege al comprador de los vendedores que cambian el precio y la información una vez se ha cerrado el acuerdo.",
                DOES_SELLER_SEE_MY_NAME: "¿Puede el vendedor ver mi nombre e información de contacto?",
                DOES_SELLER_SEE_MY_NAME_ANSWER: "Depende de si el vendedor eligió \"Comprador contacta al vendedor\" o \"Vendedor contacta al comprador\". En el caso de \"Vendedor contacta al comprador\", deberás proporcionar tu información al vendedor para que pueda contactar contigo. De lo contrario, el vendedor solo verá  tu apodo.",
                WHAT_IS_WATCHLIST: "¿Qué es \"Mi lista de seguimiento\"?",
                WHAT_IS_WATCHLIST_ANSWER: "\"My Watchlist\" es una lista de todos los libros de texto que te interesan. Sólo muestra las ofertas de libros de texto en las que se haya intercambiado información entre comprador y vendedor",
                GENERAL: "General",
                WHAT_IS_ISBN: "¿Qué es un ISBN?",
                WHAT_IS_ISBN_ANSWER: "El Número Estándar Internacional Libros (ISBN) es un número de 10 dígitos que identifica de forma exclusiva los libros y productos similares publicados internacionalmente.",
                WHAT_IS_EAN: "¿Qué es un EAN?",
                WHAT_IS_EAN_ANSWER: "Cada ISBN consta de trece dígitos. El número de trece dígitos se divide en cinco partes de longitud variable, cada parte separada por un guion. También se llama ISBN-13. Más información",
                HOW_TO: "Cómo",
                CREATE_AN_ACCOUNT: "Crear una cuenta",
                CREATE_AN_ACCOUNT_ANSWER: "Nada es más fácil que crear tu cuenta personal en Student 2 Student. no requiere que introduzcas información personal como número de teléfono, cumpleaños, etc. Sólo necesitas una dirección de correo electrónico válida. Haz clic en la imagen para ver un ejemplo de cómo crear una cuenta.\n" +
                    "\n" +
                    "1. Escribe tu nombre completo (Ej .: Joe Miller)\n" +
                    "2. Inserta tu apodo (Ej .: Joe.Miller12). Este es el nombre de otros usuarios del estudiante 2 que el estudiante verá.\n" +
                    "3. Introduce una dirección de email válida. (Ejemplo: Joe.Miller12@student2student.com)\n" +
                    "4. Introduce una contraseña segura. Debe tener un mínimo de 6 caracteres.\n" +
                    "5. Este es el dato más importante: tienes que elegir tu Campus Universitario. Encuentra tu Campus escribiendo el nombre de la universidad, la ubicación, la URL de la universidad. Cuando empieces a escribir las letras, el sistema extraerá una lista de universidades que ya existen en Student2Student. Elige tu Universidad\n" +
                    "Encuentra la universidad escribiendo el nombre de la universidad, la ubicación, la URL de la universidad o la universidad. Cuando empieces a escribir las letras, el sistema extraerá una lista de universidades que ya existen en Student 2 Student. Elige tu Universidad.\n" +
                    "(Ej .: Se escribió en Osh y eligió la Universidad de Wisconsin Oshkosh, Oshkosh (WI), Estados Unidos) 6. Dínos cómo has conocido de Student2Student. (Ej .: Facebook)\n" +
                    "7. Completa el proceso\n" +
                    "\n" +
                    "Haz clic en \"Crear mi cuenta\" para finalizar el proceso. Lo último que tienes que hacer es activar tu cuenta. Entra a la cuenta de email que usaste para darte de alta y haz clic en el enlace del correo electrónico de verificación que te enviamos.\n" +
                    "\n" +
                    "¿Listo para comprar, vender y ahorrar?\n",
                RESET_MY_PASSWORD: "Restablecer mi contraseña",
                RESET_MY_PASSWORD_ANSWER: "¿Olvidaste tu contraseña?\n" +
                    " Ningún problema. Puedes restablecer tu contraseña en la página \"Iniciar sesión - Olvidé la contraseña\" o haciendo clic aquí.\n" +
                    "\n" +
                    "1. Introduce la dirección de correo electrónico que utilizaste cuando registraste tu cuenta. (Ej .: joe.miller12@student2student.com)\n" +
                    "2. Recibirás un correo electrónico con el enlace para restablecer tu contraseña. Ten en cuenta que el enlace sólo funciona durante un corto período de tiempo. Sigue el enlace a Student2Student para restablecer tu contraseña.\n" +
                    "\n" +
                    "3. Define tu nueva contraseña.\n" +
                    "\n" +
                    "tu nueva contraseña de ahora en adelante.",
                POLICIES: "Políticas",
                PRIVACY: "Seguridad",
                PRIVACY_ANSWER: "Lee nuestra política de privacidad aquí",
                DISCLAIMER: "Renuncia",
                DISCLAIMER_ANSWER: "Leer aviso legal aquí",
                CONDITION_OF_USE: "Condiciones de uso",
                CONDITION_OF_USE_ANSWER: "Leer estado de uso aquí",
                CONTACT_US: "Contáctenos",
                STILL_HAVE_QUESTIONS: "¿Aun tienes dudas?",
                STILL_HAVE_QUESTIONS_ANSWER: "¿Aun tienes dudas? Contáctenos aquí",
                READ_OUR:"Lee nuestro...",
                VIDEO_IN_SPANISH:"Video en Español",
                VIDEO_IN_ENGLISH:"Video en Inglés",

            },
            messageBoardScreenTexts: {
                ALL: "Todo",
                UNREAD: "No leído",
                STARRED: "Destacado",
                SELLING: "Vendo",
                BUYING: "Comprado",
                SOLD: "Vendido",
                BOUGHT: "Comprado",
                TEXT_BOOK_DEALS:"ACUERDO PARA LIBROS DE TEXTO",
                NO_DEAL_TO_SHOW: "No hay ofertas para mostrar",
                GO_TO_DEAL:"Ir al Acuerdo",
                CONTACT:"Contacto",
                NO_ONE_HAS_CONTACTED:"No one has contacted for this textbook deal yet.",
                CONTACT_DETAILS:"Detalles de contacto",
                // need to add ng-htm lbind
                YOU_ARENT_SELLING_ANY_BOOK: "Hasta ahora no has vendido ningún libro. Desde aquí puedes comenzar a vender tus libros de texto en cuestión de segundos.",
                YOU_HAVENT_CONTACTED_FOR_ANY_BOOK: "Todavía no has contactado con nadie. Puedes empezar a comprar libros de texto en cuestión de segundos.",
                YOU_HAVENT_SOLD_ANY_BOOK: "Aún no has vendido ningún libro",
                YOU_HAVENT_BOUGHT_ANY_BOOK: "Aún no has comprado ningún libro"
            },
            notificationScreenTexts: {
                HAS_CONTACTED_YOU: " Han contactado contigo por el siguiente libro ",
                NO_NEW_NOTIFICATION: "No tienes nuevas notificaciones"
            },
            privacyPolicyScreenTexts: {
                WELCOME_TO_STUDENT2STUDENT: "Bienvenido a Student2Student. Esta web te proporciona diferentes funcionalidades sujetas a nuestra \"Política de Privacidad\". Si visitas, realizas intercambios y/o compras en Student2Student, aceptas implícitamente nuestra \"Política de Privacidad\". Por favor, revísala atentamente.",
                STUDENT2STUDENT_HAS_ESTABLISHED:"Student2Student ha establecido esta política de privacidad para informarte de cómo se protege, recoge y emplea la información que nos proporcionas. Esta política puede ser actualizada por Student2Student en cualquier momento. Student2Student notificará los cambios significativos en dicha política, mediante su publicación en la página web o por email.",
                PROTECTING_YOUR_PRIVACY: "PROTEGIENDO TU PRIVACIDAD",
                WE_DO_NOT_SHARE: "NO compartimos tu información con terceros.",
                WE_DO_NOT_EMPLOY: "NO utilizamos dispositivos de seguimiento (\"cookies\").",
                WE_DO_NOT_SEND: "NO te enviaremos ninguna comunicación que no nos hayas solicitado.",
                ACCOUNT_INFORMATION_PASSWORD_PROTECTED: "La información de tu cuenta está protegida por una contraseña. Guarda tu contraseña de forma segura y NO la compartas con nadie.",
                CONTACT_INFORMATION_OTHER: "La información de contacto de otros usuarios se te enviará por email una vez que reserves un libro. Si tú, u otro miembro, reserváis un libro accederéis a la información de contacto necesaria a través de Student2Student",
                MAKE_IT_A_HABIT: "Acostúmbrate a cerrar tu navegador de Internet después de hacer clic en \"cerrar sesión\".",
                STUDENT2STUDENT_DOES_NOT_KNOWINGLY: "Student2Student, no recoge conscientemente, ninguna información de personas menores de 13 años. Si Student2Student tiene conocimiento de que uno de sus usuarios registrados es menor de 13 años, lo eliminará como miembro.",
                STUDENT2STUDENT_OR_PEOPLE: "Student2Student, o las personas que publiquen en Student2Student, podrían facilitar enlaces a otras páginas web, que pueden tener prácticas de privacidad diferentes.",
                WE_ARE_NOT_RESPONSIBLE: "No nos hacemos responsables, ni tenemos control alguno, sobre las políticas de privacidad de dichas páginas web y animamos a los usuarios a que lean las políticas de privacidad de toda página web que visiten por primera vez.",
                DATA_WE_COLLECT: "LA INFORMACIÓN QUE RECOLECTAMOS",
                STUDENT2STUDENT_COLLECTS_EMAIL: "Student2Student almacena tu dirección de email para acciones como enviar emails de confirmación, emails de autenticación de cuentas de usuario, ofrecer servicios de suscripción por email, enviar información de contacto al reservar un libro, etc.",
                ALL_INFORMATION_PROVIDED_TO_STUDENT2STUDENT: "Toda la información que facilites a Student2Student cuando abres una cuenta nueva NO se enviará a terceros.",
                STUDENT2STUDENT_DOES_NOT_STORE: "Student2Student no almacena información sobre tarjetas de crédito.",
                THE_USE_OF_STUDENT2STUDENT: "Student2Student usa tecnología SSL.  Iniciar y cerrar sesión y usar la página web Student2Student, ofrece  dicha protección.",
                WE_MAY_COLLECT_PERSONAL_INFORMATION: "Podríamos guardar información personal, siempre y  cuando, nos la facilites, en los apartados habilitados para ello (retroalimentación o  comentarios), si la publicas en Student2Student o contactándonos directamente.",
                PLEASE_DO_NOT_POST: "Por favor, no publiques información personal en Student2Student que desees mantener privada.",
                OUR_LOGS_COLLECT: "Nuestros registros almacenan tu dirección IP, URL de página y registro horario. Estos registros nos permiten diagnosticar problemas con nuestro servidor y facilitarle nuestro servicio en Student2Student.",
                DATA_WE_STORE: "INFORMACIÓN QUE ALMACENAMOS",
                ALL_PUBLISHED_BOOKS: "Todos los libros publicados se almacenan en nuestra base de datos, incluso después de ser borrados, y pueden ser conservados en otros lugares.",
                OUR_WEB_LOGS: "Nuestros registros web y otros registros se almacenan igualmente en nuestra base de datos.",
                ALTHOUGH_WE_MAKE_GOOD: "A pesar de que ponemos todos los medios a nuestro alcance para almacenar la información de manera operativa, segura, y sin disponibilidad pública, no podemos garantizar seguridad absoluta.",
                ARCHIVING_AND_DISPLAYING: "ARCHIVO Y EXHIBICIÓN DE LIBROS PUBLICADOS EN STUDENT2STUDENT POR PARTE DE MOTORES DE BÚSQUEDA Y OTRAS PÁGINAS WEB.",
                SEARCH_ENGINES_AND_OTHER: "Los motores de búsqueda y otras páginas web no afiliados a Student2Student pueden archivar las publicaciones en Student2Student o hacerlas disponibles de cualquier otra forma.",
                CIRCUMSTANCES_IN_WHICH: "CIRCUNSTANCIAS BAJO LAS QUE STUDENT2STUDENT PODRÍA DIVULGAR INFORMACIÓN.",
                STUDENT2STUDENT_MAY_DISCLOSE_USERS: "Student2Student podría divulgar información sobre  sus usuarios en caso de ser requerido legalmente u obrando de buena fe considerando que una divulgación así fuese razonablemente necesaria para responder a requerimientos, órdenes judiciales y otros procesos legales.",
                STUDENT_2STUDENT_MAY_DISCLOSE_LAW: "Student2Student también podría divulgar información sobre sus usuarios a cuerpos policiales u otros, obrando de buena fe considerando que una divulgación así sería razonablemente necesaria para: cumplir nuestros Términos de Uso, responder a declaraciones de que alguna publicación u otros contenidos puedan violar derechos de terceros o para proteger los derechos, propiedad o seguridad personal de Student2Student, sus estudiantes o el público en general.",
                INTERNATIONAL_USERS: "USUARIOS INTERNACIONALES",
                BY_VISITING_OUR_WEBSITE: "Al visitar nuestra página web y facilitarnos información, entiendes y aceptas que debido a la dimensión internacional de Student2Student, podemos utilizar la información recogida en el transcurso de nuestra relación para los propósitos identificados en esta política o en otras comunicaciones contigo, incluyendo la transmisión de información fuera de tu jurisdicción.  Además, te informamos que nuestros servidores están ubicados en Suiza. Al darte de alta y facilitarnos tu información, implícitamente nos autorizas a este traspaso de información."
            },
            profileScreenTexts: {
                MY_ACCOUNT: "Mi Cuenta",
                MY_PROFILE: "Mi Perfil",
                UNIVERSITY_ADDRESS: "Dirección de la Universidad"
            },
            promoteMySellPageScreenTexts: {
                PROMOTE_YOUR: "Promociona tu",
                PROMOTE_MY: "Promocionar Mi",
                SELL_PAGE: "página de venta",
                BOOK_STORE: "Librería",
                OR_SHARE_VIA_EMAIL: "o compartir por email"
            },
            tellYourFriendsScreenTexts: {
                PROMOTE_OUR_STORE: "Promociona mi tienda"
            },
            resetPasswordScreenTexts: {
                RESET: "Restablecer",
                PASSWORD: "tu contraseña",
                RESET_PASSWORD: "Restablece tu contraseña",
                SIGN_IN: "Inicia sesión"
            },
            safetyFirstScreenTexts: {
                WHEN_MEETING_SOMEONE: "Cuando quedes con otro usuario por primera vez, por favor ten en cuenta",
                ITS_VERY_IMPORTANT: "Ten cuidado a la hora de intercambiar libros y/o dinero.",
                INSIST_ON_A_PUBLIC: "Realiza los intercambios en sitios públicos y concurridos, como una cafetería",
                TRAVEL_THERE_ON_YOUR_OWN: "Viaja siempre por tu cuenta - no aceptes que te lleve un desconocido",
                DO_TELL_YOUR_FRIEND: "Cuéntale a algún amigo o familiar que vas a hacer un intercambio, el lugar, y el nombre de la otra persona.",
                TAKE_YOUR_CELL_PHONE: "Lleva tu móvil en todo momento",
                CONSIDER_HAVING_A_FRIEND: "Si puedes, acude acompañado",
                TRUST_YOUR_INSTINCT: "Confía en tu instinto"
            },
            scamAndFraudsScreenTexts: {
                WHO_ARE_SCAMMERS: "¿CUÁL ES EL PERFIL DE UN ESTAFADOR?",
                FOLLOW_THESE_RULES: "Sigue estas reglas de sentido común:",
                DEAL_LOCALLY_WITH_FOLKS: "REALIZA TUS INTERCAMBIOS DE LIBROS LOCALMENTE CON PERSONAS CON LAS QUE PUEDAS ENCONTRARTE EN PERSONA - COE (efectivo en el intercambio) - sigue esta regla, y evitarás el 99% de los intentos de estafa en Student2Student.",
                NEVER_WIRE_FUNDS: "NUNCA ENVIES DINERO - cualquier persona que te pida que lo hagas es un estafador potencial.",
                FAKE_CASHIER_CHECKS: "Los cheques y transferencias falsas son comunes, y los bancos no se hacen responsables de este tipo de transacciones.",
                STUDENT2STUDENT_IS_NOT_INVOLVED: "Student2Student NO SE IMPLICA EN NINGUNA TRANSACCIÓN BANCARIA, y no gestiona pagos, ni garantiza transacciones, ni ofrece \"protección del comprador\" o \"certificación del vendedor\".",
                NEVER_GIVE_OUT: "NUNCA FACILITES INFORMACIÓN FINANCIERA (número de cuenta bancaria, número de seguro social, información de eBay / PayPal, etc.)",
                AVOID_DEALS_INVOLVING: "EVITA LOS INTERCAMBIOS QUE IMPLIQUEN  ENVÍO DE LIBROS O  PAGO ADELANTADO.",
                NEVER_GIVE_OUT_FINANCIAL_INFO: "NUNCA FACILITES INFORMACIÓN FINANCIERA (número de cuenta bancaria, número de seguro social, información de eBay / PayPal, etc.). Nunca la conservamos, así que no debes facilitársela a cualquier otro usuario."

            },
            signInScreenTexts: {
                SIGN_IN: "Inicia sesión",
                JOIN: "Regístrate",
                JOIN_NOW:"Regístrate ahora",
                OR_LOGIN_WITH: "O inicia sesión con",
                NOT_A_MEMBER_YET: "¿Aún no eres socio?",
                SKIP: "SALTAR",
                FORGOT_PASSWORD: "¿Has olvidado tu contraseña?"
            },
            signUpScreenTexts: {
                WHAT_IS_YOUR_UNIVERSITY_CAMPUS: "¿Cuál es tu campus universitario?",
                SELECT_REFERRAL: "Selecciona referencia",
                I_AGREE: "Acepto la ",
                NO_UNIVERSITY_FOUND: "No se encontró tu universidad",
                START_TYPING_UNIVERSITY:"Empieza a escribir el nombre de la universidad"
            },
            userPanelBookDealTexts: {
                DEAL_INFORMATION: "Información del acuerdo",
                CONTACT_HISTORY: "Historial de contacto",
                OPTIONS: "Opciones",
                SELLER: "Vendedor",
                // not done
                YOU_BUYER_CONTACT_SELLER: "Comprador contacta vendedor",
                SELLER_CONTACT_YOU_BUYER: "Vendedor contacta comprador",
                BUYER_CONTACT_YOU_SELLER: "Comprador contacta vendedor ::",
                YOU_SELLER_CONTACT_BUYER: "Vendedor contacta comprador ::",
                STUDENT2STUDENT_MESSAGE_BOARD: "Tablón de mensajes de Student2Student.",
                SELLER_EMAIL: "Email del vendedor",
                NOT_PROVIDED_BY_SELLER: "No facilitado por el vendedor",
                CELL_PHONE: "Teléfono Móvil",
                HOME_PHONE: "Teléfono fijo",
                PAYMENT: "Pago",
                CASH_AND_CHEQUE: "Efectivo y Cheque",
                CHEQUE: "Cheque",
                CASH: "Efectivo",
                CASH_ON_EXCHANGE: "Efectivo en el intercambio",
                AVAILABLE_DATE: "Fecha de disponibilidad",
                AVAILABLE_TO_PUBLIC: "Disponible al público",
                BOOK_CONDITION: "Estado del libro",
                TEXTBOOK_HAS_NOTES: "El libro tiene anotaciones",
                TEXTBOOK_IS_HIGHLIGHTED: "El libro está subrayado",
                COMMENTS: "Comentario",
                NO_COMMENTS: "Sin comentarios",
                NO_CONTACTS_TO_SHOW: "Todavía no dispone de historial de contacto.",
                EDIT_BOOK_DEAL: "Modificar oferta del libro",
                DEACTIVATE: "Desactivar",
                ACTIVATE: "Activar",
                // need ng html bind
                TEXTBOOK_IS_CURRENTLY_DEACTIVATED: "¡La oferta está actualmente desactivada!. Actívala para que otros estudiantes puedan volver a verla!",
                DELETE: "Borrar",
                WANT_TO_DELETE: "¿Deseas eliminar esta oferta?",
                SURE_WANT_TO_DELETE: "Estás seguro de que deseas eliminarla ",
                ONCE_DELETED_CANNOT_RECOVER: "Una vez eliminado todo el contenido relacionado con este libro, la oferta será borrada. No será posible recuperar ningún dato relativo a este acuerdo después de esta acción.",
                WANT_TO_ACTIVATE: "¿Quieres activar la oferta de este libro de texto?",
                SURE_WANT_TO_ACTIVATE: "¿Estás seguro de que deseas activar la oferta de este libro de texto? ",
                OTHER_STUDENTS_WILL_SEE: "Otros estudiantes podrán ver la oferta y preguntar por este libro de texto.",
                WANT_TO_DEACTIVATE: "¿Deseas desactivar la oferta de este libro de texto?",
                SURE_WANT_TO_DEACTIVATE: "¿Deseas desactivar la oferta de este libro de texto? ",
                NO_STUDENT_WILL_SEE: "Ningún estudiante podrá ver más esta oferta.",
                WANT_TO_SELL_BOOK_TO_USER: "Quieres vender el libro a ",
                SURE_WANT_TO_SELL_TO_THIS_USER: "¿Estás seguro de que quieres vender este libro a este usuario?",
                BOOK_WILL_BE_ON_SELL_ARCHIVE_PAGE: "Una vez vendido, puedes ver el libro en la página en tu archivo de ventas.",
                WANT_TO_DELETE_FROM_WISHLIST: "¿Eliminó este libro de la lista de deseos?",
                SURE_WANT_TO_DELETE_FROM_WISHLIST:"¿Seguro que quiere eliminar este libro de WishList?"
            },
            validationTexts: {
                VALID_EMAIL_IS_REQUIRED: "Introduce un email válido",
                SEARCH_QUERY_IS_REQUIRED: "Debes introducir un concepto en la  búsqueda",
                YOUR_NAME_IS_REQUIRED: "Debes introducir tu nombre completo",
                SUBJECT_IS_REQUIRED: "Introduce un asunto.",
                MESSAGE_IS_REQUIRED: "Introduce un mensaje",
                SELECT_WHAT_YOU_WANT: "Por favor, elige lo que quieras",
                CHARACTER_LIMIT_EXCEEDED: "Has superado el límite de caracteres",
                COMMENT_MUST_BE_LESS_THEN_1200_CHAR: "Tu comentario debe tener menos de 1200 caracteres.",
                PLEASE_SELECT_BOOK_CONDITION: "Introduce el estado del libro.",
                PLEASE_SELECT_BOOK_HIGHLIGHTED: "Elige texto subrayado o no.",
                PLEASE_SELECT_BOOK_HAS_NOTES: "Elige si el libro contiene anotaciones.",
                PLEASE_SELECT_CONTACT_METHOD: "Elige método de contacto.",
                HAVE_TO_PROVIDE_AT_LEAST_ONE_CONTACT_INFO: "Debes introducir al menos una información de contacto",
                HAVE_TO_SET_IF_BOOK_IS_PUBLIC: "Incluye si el libro está disponible para el público o no.",
                TEXTBOOK_AVAILABLE_DATE_REQUIRED: "Debes seleccionar la fecha de disponibilidad del libro en el siguiente formato  (11-Mayo-2016)",
                SELLING_PRICE_REQUIRED: "Debes incluir el precio de venta.",
                SELLING_PRICE_CANNOT_BE_GREATER: "Tu precio no puede superar los ",
                HAVE_TO_SET_ONE_PAYMENT_METHOD: "Debes elegir, como mínimo, un método de pago.",
                YOU_HAVE_TO_AGREE: "Debes aceptar la publicación del libro",
                BOOK_TITLE_IS_REQUIRED: "El Título del libro es obligatorio",
                BOOK_ISBN_IS_REQUIRED: "El ISBN del libro es obligatorio (ISBN-10…) (10 Dígitos)",
                BOOK_AUTHOR_IS_REQUIRED: "El nombre del autor del libro es obligatorio.",
                BOOK_EDITION_IS_REQUIRED: "La edición del libro es obligatoria",
                BOOK_PUBLISHER_IS_REQUIRED: "La editorial del libros es obligatoria.",
                BOOK_PUBLISH_DATE_IS_REQUIRED: "Fecha de publicación del libro en formato (11-May-2016) es necesaria.",
                BOOK_BINDING_TYPE_IS_REQUIRED: "Introduce el tipo de encuadernación del Libro.",
                BOOK_PAGE_NUMBER_IS_REQUIRED: "Introduce el número de paginas del Libro",
                YOU_HAVE_TO_ADD_AT_LEAST_ONE_PIC: "Selecciona 1 imagen como mínimo.",
                EMAIL_OR_USERNAME_IS_REQUIRED: "Introduce tu nombre de usuario y email",
                PASSWORD_IS_REQUIRED: "Introduce tu contraseña",
                FULL_NAME_IS_REQUIRED_MIN_3_CHAR: "Nombre completo es obligatorio y debe tener como mínimo 3 caracteres",
                USERNAME_IS_REQUIRED_CHAR: "Introduce tu nombre de usuario (El nombre de usuario debe tener como mínimo 3 caracteres y un máximo de 20 caracteres. El nombre de usuario puede contener valores alfanuméricos, pero no hay caracteres especiales excepto '-' o '_')",
                PASSWORD_IS_REQUIRED_MIN_6_CHAR: "Introduce tu contraseña (La contraseña debe tener como mínimo 6 caracteres)",
                CONFIRM_PASSWORD_IS_REQUIRED: "¡Las contraseñas no coinciden!",
                CAMPUS_IS_REQUIRED:"Introduce tu campus.",
                SELECT_REFERRAL: "Elige referencia",
                YOU_HAVE_TO_AGREE_SIGNUP: "Debes aceptar los términos del servicio.",
                USERNAME_ALREADY_EXISTS: "El usuario ya existe",
                EMAIL_ALREADY_EXISTS: "El email ya existe",
                ISBN_IS_REQUIRED: "ISBN es obligatorio",


            },
            placeholderTexts: {
                ENTER_YOUR_EMAIL: "Introduce tu email",
                PRINCIPAL_OF_MARKETING: "Principios del Marketing…",
                FULL_NAME: "Nombre completo",
                EMAIL: "Email",
                SUBJECT: "Asunto",
                MESSAGE: "Mensaje",
                I_WANT: "Yo quiero",
                // not done
                TYPE_YOUR_MESSAGE: "Escribe el mensaje",
                NEW: "Nuevo",
                BARELY_USED: "Apenas Usado",
                USED: "Usado",
                HEAVILY_USED: "Muy usado",
                YES: "Sí",
                NO: "No",
                COMMENT: "Comentario",
                HOME_PHONE: "Teléfono Fijo",
                CELL_PHONE: "Teléfono Móvil",
                SELLING_PRICE: "Precio de Venta (Ex. 15,00)",
                COE: "En Efectivo",
                CHEQUE: "Cheque",
                USERNAME: "Usuario",
                ENTER_FRIENDS_EMAIL: "Introduce el email de tu amigo",
                ENTER_YOUR_NAME: "Introduce su nombre",
                YOUR_MESSAGE: "Tu mensaje",
                BOOK_TITLE: "Titulo del libro",
                BOOK_ISBN_10: "ISBN del libro ISBN-10",
                BOOK_ISBN_13: "ISBN del libro ISBN-13",
                BOOK_SUBTITLE: "Subtitulo del libro",
                BOOK_AUTHOR: "Autor del libro",
                BOOK_EDITION: "Edición del libro",
                BOOK_PUBLISHER: "Editorial",
                BOOK_PUBLISH_DATE: "Fecha de Publicación del libro",
                BOOK_BINDING: "Encuadernacion del Libro",
                BOOK_PAGE: "Número de páginas del libro",
                BOOK_LANGUAGE: "Idioma del libro",
                BOOK_DESCRIPTION: "Descripción del libro",
                EMAIL_OR_USERNAME: "Email o Usuario",
                PASSWORD: "Contraseña",
                CONFIRM_PASSWORD: "Confirma la contraseña",
                ENTER_ISBN: "Introduce el ISBN",
                CONTACT_EMAIL:"Email de contacto"

            },
            buttonTexts: {
                SEARCH: "Buscar",
                SCAN_BARCODE: "Escanear código de barras",
                SEND: "Enviar",
                NEXT: "Adelante",
                BACK: "Volver",
                SELL_BOOK: "Vender libro",
                SEND_EMAIL: "Enviar email",
                ADD_MORE_FRIENDS_EMAIL: "Agregar más email de amigos",
                ADD_MORE_FRIENDS:"Añadir más amigos",
                RESET_PASSWORD: "Restablecer la contraseña",
                GO_TO_SELLING_BOOK_LIST: "Ir a lista libros en venta",
                SIGN_UP: "Regístrate",
                BACK_TO_DETAILS: "Volver a los detalles",
                BACK_TO_LIST: "Volver a la lista",
                GET_SELLER_DETAILS: "Accede a los datos del vendedor",
                CONTACT_SELLER: "Contacta con el vendedor",
                HIDE_INFORMATION: "Ocultar información",
                MORE_INFORMATION: "Más información",
                CONTACT: "Contacto",
                PURCHASE: "Compra",
                MORE_DETAILS:"Más Detalles",
                LESS_DETAILS:"Menos Detalles",
                SAVE_DEAL:"Ahorre Trato",
                CHECK:"Comprobar"
            },
            menuTexts: {
                SELL: "Vender",
                BUY: "Comprar",
                MESSAGE: "Mensaje",
                NOTIFICATION: "Notificación",
                HOME: "Inicio",
                ABOUT: "Acerca de",
                SELECT_LOCATION: "Selecciona ubicación",
                BUY_ARCHIVE: "Comprar archivo",
                BUY_BOOK: "Comprar libro",
                BUYING_BOOK_LIST: "Comprando Libros",
                BUYING_BOOKS: "Comprando libros",
                BOOKS_I_AM_BUYING: "Libros que compro",
                BOOKS_I_AM_SELLING: "Libros que vendo",
                BOUGHT_BOOKS:"Libros comprados",
                SOLD_BOOKS:"Libros vendidos",
                CONDITION_OF_USE: "Estado de uso",
                CONTACT_US: "Contáctanos",
                DISCLAIMER: "Renuncia",
                LOGIN: "Inicia sesión",
                MESSAGE_BOARD: "Tablón de mensajes",
                SELL_BOOK: "Vender libro",
                SELLING_BOOK_LIST: "Lista de Libros de Venta",
                SELLING_BOOKS: "Lista de libros en venta",
                SELL_ARCHIVE: "Vender archivo",
                WISHLIST: "Lista de deseos",
                HELP_AND_SAFETY: "Ayuda y Seguridad",
                PROMOTE_STORE: "Promocionar tienda",
                PROMOTE_MY_PAGE: "Promociona mi página",
                PROMOTE_MY_BOOK_STORE: "Promocionar Mi Tienda de LIbros",
                LOGOUT: "Desconectar",
                FAQ: "FAQ",
                SCAM_AND_FRAUD: "Estafas y Fraude",
                SAFETY_FIRST: "La seguridad primero",
                NOTIFICATIONS: "Notificaciones",
                PRIVACY_POLICY: "Política de Privacidad",
                LANGUAGES:"Idiomas",
                DISCLAIMER_AND_CONDITIONS:"Renuncia y condiciones",
                TELL_YOUR_FRIENDS: "Invita a tus amigos"
            },
            modalTexts: {
                HOLD_CAMERA_BARCODE: "Coloca la cámara frente del código de barras del libro",
                SCANNING_FOR_BARCODE: "Escaneando código de barras del libro...",
                PLEASE_ALLOW_CAMERA: "Permite el acceso a tu cámara",
                THIS_ALLOWS_STUDENT2STUDENT_TO_SCAN: "Esto permite a Student2Student escanear códigos de barras a través de tu móvil.",
                ENABLE_CAMERA_ACCESS: "Habilita el acceso a la cámara",
                OR: "O",
                GO_BACK: "Volver",
                THIS_ALLOWS_STUDENT2STUDENT_TO_TAKE_PHOTO: "Esto permite a Student2Student hacer fotos del libro a través de la cámara del móvil.",
                CANCEL: "Cancelar",
                OK: "OK",
                DONE: "Hecho",
                CONGRATULATIONS: "¡Felicidades!",
                FOR_SELLING_YOUR_BOOK: "¡Has vendido tu libro!",
                SHARE_YOUR_BOOK_IN_SOCIAL_MEDIA: "Comparte tu libro en las redes sociales",
                CONFIRM: "Confirmar",
            },
            responseMessageTexts: {
                NO_STUDENT_DEALS_ARE_FOUND: "No hay ofertas de estudiantes",
                NO_MORE_BOOK_FOUND: "No más libros encontrados",
                PLEASE_REFINE_SEARCH_QUERY: "Por favor, redefine tu búsqueda actual e inténtalo de nuevo.",
                SOMETHING_WENT_WRONG: "Algo no salió bien",
                PLEASE_TRY_AGAIN_LATER: "Por favor, inténtalo de nuevo",
                YOU_HAVE_TO_LOGIN_FIRST: "Tienes que iniciar sesión antes",
                PLEASE_SEARCH_AGAIN: "Por favor busca de nuevo",
                PLEASE_LOGIN_TO_CONTACT: "Por favor inicia sesión para contactar",
                LOGGED_OUT_FORCEFULLY: "Desconectado forzosamente",
                NO_ONLINE_DEALS_ARE_FOUND: "No se encuentran ofertas online",
                PLEASE_LOGIN_TO_ADD_TO_WISHLIST: "Por favor, inicia sesión para añadir el libro a la lista de deseos",
                RECEIVED_LOCAL_BOOK_DEALS: "Has recibido ofertas de libros locales",
                NO_BOOKS_ARE_FOUND: "No se encuentran libros",
                OPENING_URL_IN_BROWSER: "Abre la URL en el navegador",
                LOGGED_OUT_SUCCESSFULLY: "Desconectado con éxito",
                EVERYTHING_PERFECT: "Todo perfecto",
                NO_PRICE_FOUND: "Precio no encontrado",
                NOT_FOUND:"No pudo encontrar",
                GOODBYE:"Adiós ",
                YOU_ARE_LOGGED_OUT:"Usted está desconectado.",
                BOOKS_NOT_AVAILABLE_AMAZON: "El libro no se encuentra disponible en Amazon"
            },
            pushNotificationTexts:{
                NEW_MESSAGE_FROM:"Nuevo mensaje de ",
                HAS_CONTACTED_FOR_A_BOOK_NAMED:" se ha puesto en contacto con usted para el libro llamado ",
                NEW_CONTACT_RECEIVED_FROM:"Nuevo contacto recibido de "
            },locationScreenTexts: {
                CHOOSE_YOUR_LOCATION: "Selecciona tu ubicación",
                CHOOSE_YOUR_COUNTRY: "Selecciona tu provincia",
                SELECT_THE_COUNTRY: "Selecciona la provincia  en donde se encuentra tu campus.",
                SELECT_BUTTON_TEXT: "Selecciona"
            }

        })
            .useStaticFilesLoader({
                prefix: 'laguages/',
                suffix: '.json'
            })
            .preferredLanguage('es')
            .useSanitizeValueStrategy('escape');

        // $translateProvider.useStaticFilesLoader({
        //     prefix: 'laguages/locale_',
        //     suffix: '.json'
        // });

        //$translateProvider.preferredLanguage("es");


    }])

    .config(['$authProvider', 'SOCIAL_MEDIA_INTEGRATION_CONSTANT', function ($authProvider, SOCIAL_MEDIA_INTEGRATION_CONSTANT) {
        $authProvider.facebook({
            clientId: SOCIAL_MEDIA_INTEGRATION_CONSTANT.FACEBOOK_CLIENT_ID,
            url: SOCIAL_MEDIA_INTEGRATION_CONSTANT.FACEBOOK_REDIRECT_URL
        });
        $authProvider.google({
            clientId: SOCIAL_MEDIA_INTEGRATION_CONSTANT.GOOGLE_CLIENT_ID,
            url: SOCIAL_MEDIA_INTEGRATION_CONSTANT.GOOGLE_REDIRECT_URL
        });
    }])

    .config(['$stateProvider', '$urlRouterProvider', 'authCheckerServiceProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, authCheckerServiceProvider, $locationProvider) {
        var authCheck = {
            authCheck: function () {
                return authCheckerServiceProvider.$get().checkIfLoggedIn();
            }
        };

        var adminCheck = {
            adminCheck: function () {
                return authCheckerServiceProvider.$get().checkIfAdminLoggedIn();
            }
        };

        var authCheckNormal = {
            authCheckNormal: function () {
                return authCheckerServiceProvider.$get().checkIfLoggedInNormal();
            }
        };


        $urlRouterProvider
//            .when('/:', '/contacts/:id')
//            .when('/access_token=:accessToken','')
            .otherwise('/');
        $stateProvider


            ////////////////////// Public View Routes ///////////////////////

            .state('app', {
                abstract: true,
                url: '/',
                controller: 'StartCtrl',
                templateUrl: 'views/web/app.html'
            })
            //dashboard
            .state('app.dashboard', {
                url: '^/',
                controller: 'DashboardCtrl',
                templateUrl: 'views/web/dashboard.html'
            })
            //dashboard Redirect index.html
            .state('app.index_html', {
                url: '^/index.html',
                templateUrl: 'views/web/dashboard.html',
                redirectTo: 'app.dashboard'
            })
            //dashboard Redirect index.php
            .state('app.index_php', {
                url: '^/index.php',
                templateUrl: 'views/web/dashboard.html',
                redirectTo: 'app.dashboard'
            })

            //how It Work page
            .state('app.howItWorks', {
                url: '^/howItWorks',
                controller: 'HowItWorksCtrl',
                templateUrl: 'views/web/howItWorks.html'
            })

            //concept Video page Spanish
            .state('app.conceptVideoSpanish', {
                url: '^/conceptVideoSpanish',
                controller: 'ConceptVideoSpanishCtrl',
                templateUrl: 'views/web/conceptVideoSpanish.html'
            })

            //concept Video page
            .state('app.conceptVideo', {
                url: '^/conceptVideo',
                controller: 'ConceptVideoCtrl',
                templateUrl: 'views/web/conceptVideo.html'
            })

            //login
            .state('app.login', {
                url: '^/login',
                controller: 'LoginCtrl',
                templateUrl: 'views/security/login.html',
                params: {
                    "bookId": null
                }
            })

            // Add University Public
            .state('app.addUniversity', {
                url: '^/addUniversity',
                controller: 'UniversityCtrl',
                templateUrl: 'views/university/university.html'
            })
            // University Map
            .state('app.universityMap', {
                url: '^/universityMap',
                controller: 'UniversityMapCtrl',
                templateUrl: 'views/university/university_map.html'
            })

            //Registration
            .state('app.signup', {
                url: '^/signup',
                controller: 'SignupCtrl',
                templateUrl: 'views/security/signup.html',
                params: {
                    "email": null
                }
            })
            //Registration Confirm
            .state('app.confirm', {
                url: '^/confirmRegistration/:code',
                controller: 'SignupConfirmCtrl'
            })
            //forgot password
            .state('app.forgotPassword', {
                url: '^/forgotPassword',
                controller: 'ForgotPasswordCtrl',
                templateUrl: 'views/security/forgotpassword.html'
            })
            //reset Password password
            .state('app.resetPassword', {
                url: '^/resetPassword/:code',
                controller: 'ResetPasswordCtrl',
                templateUrl: 'views/security/resetpassword.html'
            })

            //book Buy
            .state('app.bookBuy', {
                url: '^/bookBuy',
                controller: 'BookBuyCtrl',
                templateUrl: 'views/book/buy_book.html'
            })
            //book Search
            .state('app.bookBuy.bookSearch', {
                url: '^/bookSearch/:searchQuery?pageNumber&campus',
                views: {
                    'searchResultView@app.bookBuy': {
                        templateUrl: 'views/book/search_result.html',
                        controller: 'BookSearchCtrl'
                    }
                },
                resolve: authCheckNormal

            })
            //compare page
            .state('app.bookComparePrice', {
                url: '^/bookComparePrice/:asin?isbn&ean',
                controller: 'BookCompareCtrl',
//                templateUrl: 'views/book/compare.html'
                templateUrl: 'views/book/compare_book_price.html',
                resolve: authCheckNormal
            })
            //If Buy From Amazon
            .state('app.buyFromAmazon', {
                url: '^/buyFromAmazon/:bookOfferId',
                controller: 'BookBuyFromAmazonCtrl'
            })
            //Contact BuyerToSeller
            .state('app.contact', {
                url: '^/contact',
                controller: 'ContactCtrl',
                templateUrl: 'views/contact/contact.html',
                params: {
                    "deal": null,
                    "isbn": null,
                    "asin": null,
                    "ean": null
                }

            })
            //Complete Registration
            .state('app.completeRegistration', {
                url: '^/completeRegistration',
                controller: 'SocialRegisterCompleteCtrl',
                templateUrl: 'views/security/complete_registration.html',
                params: {
                    "user": null
                }

            })
            //Contact Us
            .state('app.contactUs', {
                url: '^/contactUs',
                controller: 'ContactUsCtrl',
                templateUrl: 'views/web/contact_us.html'
            })
            //Public News
            .state('app.news', {
                url: '^/news',
                controller: 'NewsCtrl',
                templateUrl: 'views/news/news.html'
            })
            //News Details
            .state('app.newsDetails', {
                url: '^/newsDetails/:newsId',
                controller: 'NewsDetailsCtrl',
                templateUrl: 'views/news/news_details.html'
            })
            //Tell My Friends
            .state('app.tellFriends', {
                url: '^/tellFriends',
                controller: 'TellFriendsCtrl',
                templateUrl: 'views/web/tell_friends.html'
            })


            //Privacy Policy
            .state('app.privacyPolicy', {
                url: '^/privacyPolicy',
                controller: 'PrivacyPolicyCtrl',
                templateUrl: 'views/web/privacy_policy.html'
            })
            //Disclaimer
            .state('app.disclaimer', {
                url: '^/disclaimer',
                controller: 'DisclaimerCtrl',
                templateUrl: 'views/web/disclaimer.html'
            })

            //Condition of Use
            .state('app.conditionOfUse', {
                url: '^/conditionOfUse',
                controller: 'ConditionOfUseCtrl',
                templateUrl: 'views/web/condition_of_use.html'
            })
            //BUY FROM AMAZON
            .state('app.buy_from_amazon', {
                url: '^/buy_from_amazon:bookOfferId',
                controller: 'BookBuyFromAmazonCtrl'
            })
            //Safety First
            .state('app.safetyFirst', {
                url: '^/safetyFirst',
                controller: 'SafetyFirstCtrl',
                templateUrl: 'views/web/safety_first.html'
            })
            //Scam & Fraud
            .state('app.scamAndFraud', {
                url: '^/scamAndFraud',
                controller: 'ScamFraudCtrl',
                templateUrl: 'views/web/scam_fraud.html'
            })
            //FAQ
            .state('app.faq', {
                url: '^/faq',
                controller: 'FaqCtrl',
                templateUrl: 'views/web/faq.html'
            })

            //Access Denied
            .state('app.accessDenied', {
                url: '^/accessDenied',
                templateUrl: 'views/web/accessDenied.html'
            })

            /////////////////////// Logged In User Routes /////////////////


            //Promote my sell page
            .state('app.promoteMyStore', {
                url: '^/promoteMyStore',
                controller: 'TellFriendsCtrl',
                templateUrl: 'views/web/tell_friends.html',
                resolve: authCheck
            })


            //Contacted Book List
            .state('app.contactedBookList', {
                url: '^/contactedBookList',
                controller: 'ContactedBookListCtrl',
                templateUrl: 'views/book/contacted_book_list.html',
                resolve: authCheck
            })
            //Selling Book List
            .state('app.sellingBookList', {
                url: '^/sellingBookList',
                controller: 'SellingBookListCtrl',
                templateUrl: 'views/book/selling_book_list.html',
                resolve: authCheck
            })
            //Sell Archive
            .state('app.sellArchive', {
                url: '^/sellArchive',
                controller: 'SellArchiveCtrl',
                templateUrl: 'views/book/sell_archive.html',
                resolve: authCheck
            })
            //Buy Archive
            .state('app.buyArchive', {
                url: '^/buyArchive',
                controller: 'BuyArchiveCtrl',
                templateUrl: 'views/book/buy_archive.html',
                resolve: authCheck
            })

            //Wishlist
            .state('app.wishList', {
                url: '^/wishList',
                controller: 'WishListCtrl',
                templateUrl: 'views/book/wishlist.html',
                resolve: authCheck
            })
            //Profile
            .state('app.profile', {
                url: '^/profile',
                controller: 'ProfileCtrl',
                templateUrl: 'views/account/profile.html',
                resolve: authCheck
            })
            //Change Password
            .state('app.changePassword', {
                url: '^/changePassword',
                controller: 'ChangePasswordCtrl',
                templateUrl: 'views/account/change_password.html',
                resolve: authCheck
            })

            //Sell Book Main Page
            .state('app.sellBook', {
                url: '^/sellBook',
                controller: 'BookSellMainCtrl',
                templateUrl: 'views/book/sell_book.html',
                resolve: authCheck

            })
            //Sell Book
            .state('app.sellBookByIsbn', {
                url: '^/sellBookByIsbn',
                controller: 'BookSellCtrl',
                templateUrl: 'views/book/sell_page.html',
                params: {
                    "book": null
                },
                resolve: authCheck
            })
            //Sell Book Custom
            .state('app.sellBookCustom', {
                url: '^/sellBookCustom',
                controller: 'BookSellCustomCtrl',
                templateUrl: 'views/book/sell_page_custom.html',
                resolve: authCheck
            })


            //Edit Book Deal
            .state('app.editBookDeal', {
                url: '^/editBookDeal',
                controller: 'BookDealEditCtrl',
                templateUrl: 'views/book/book_deal_edit_page.html',
                params: {
                    "book": null
                },
                resolve: authCheck
            })

            //Message Board
            .state('app.messageBoard', {
                url: '^/messageBoard',
                controller: 'MessageBoardCtrl',
                templateUrl: 'views/message/messageBoard.html',
                resolve: authCheck
            })


            //////////////////////// ADMIN Routes ////////////////
            //AdminUserList
            .state('app.userList', {
                url: '^/userList',
                controller: 'UserManagementCtrl',
                templateUrl: 'views/admin/user/user_list.html',
                resolve: adminCheck
            })

            //AdminUserReport
            .state('app.adminUserReport', {
                url: '^/adminUserReport',
                controller: 'AdminUserReportCtrl',
                templateUrl: 'views/admin/report/adminUserReport.html',
                resolve: adminCheck
            })
            //AdminUserBrowsingReport
            .state('app.adminUserBrowsingReport', {
                url: '^/adminUserBrowsingReport',
                controller: 'AdminUserBrowsingReportCtrl',
                templateUrl: 'views/admin/report/adminUserBrowsingReport.html',
                resolve: adminCheck
            })
            //AdminUniversityReport
            .state('app.adminUniversityReport', {
                url: '^/adminUniversityReport',
                controller: 'AdminUniversityReportCtrl',
                templateUrl: 'views/admin/report/adminUniversityReport.html',
                resolve: adminCheck
            })
            //AdminBookReport
            .state('app.adminBookDealReport', {
                url: '^/adminBookDealReport',
                controller: 'AdminBookDealReportCtrl',
                templateUrl: 'views/admin/report/adminBookDealReport.html',
                resolve: adminCheck
            })
            //GoogleAnalyticsReport
            .state('app.googleAnalyticsReport', {
                url: '^/googleAnalyticsReport',
                controller: 'GoogleAnalyticsReportCtrl',
                templateUrl: 'views/admin/report/googleAnalyticsReport.html',
                resolve: adminCheck
            })


            //Admin University Management
            .state('app.universityManagement', {
                url: '^/universityManagement',
                controller: 'UniversityManagementCtrl',
                templateUrl: 'views/admin/university/university_management.html',
                resolve: adminCheck
            })
            //Admin Edit University
            .state('app.universityEdit', {
                url: '^/universityEdit',
                controller: 'UniversityEditCtrl',
                templateUrl: 'views/admin/university/university_edit.html',
                params: {
                    "university": null
                },
                resolve: adminCheck
            })

            //Admin Merge University
            .state('app.universityMerge', {
                url: '^/universityMerge',
                controller: 'UniversityMergeCtrl',
                templateUrl: 'views/admin/university/university_merge.html',
                params: {
                    "university": null
                },
                resolve: adminCheck
            })

            //Add User
            .state('app.userList.addUser', {
                url: '^/addUser',
                views: {
                    'addUserView@app.userList': {
                        templateUrl: 'views/admin/user/add_user.html',
                        controller: 'AddUserCtrl'
                    }
                },
                resolve: adminCheck

            })
            //Admin All Book Deals
            .state('app.allBookDeals', {
                url: '^/allBookDeals',
                controller: 'BookDealCtrl',
                templateUrl: 'views/admin/book/book_deals.html',
                resolve: adminCheck
            })
            //Admin Quotes
            .state('app.quotes', {
                url: '^/quotes',
                controller: 'QuoteCtrl',
                templateUrl: 'views/admin/content/quotes.html',
                resolve: adminCheck
            })
            //Add Student Quote
            .state('app.quotes.addStudentQuote', {
                url: '^/addStudentQuote',
                views: {
                    'addStudentQuoteView@app.quotes': {
                        templateUrl: 'views/admin/content/add_student_quote.html',
                        controller: 'AddQuoteCtrl'
                    }
                },
                resolve: adminCheck

            })
            //Add University Quote
            .state('app.quotes.addUniversityQuote', {
                url: '^/addUniversityQuote',
                views: {
                    'addUniversityQuoteView@app.quotes': {
                        templateUrl: 'views/admin/content/add_university_quote.html',
                        controller: 'AddQuoteCtrl'
                    }
                },
                resolve: adminCheck

            })
            //Admin News
            .state('app.newsManagement', {
                url: '^/newsManagement',
                controller: 'NewsManagementCtrl',
                templateUrl: 'views/admin/content/news.html',
                resolve: adminCheck
            })
            //Add Student Quote
            .state('app.newsManagement.addNews', {
                url: '^/addNews',
                views: {
                    'addNewsView@app.newsManagement': {
                        templateUrl: 'views/admin/content/add_news.html',
                        controller: 'AddNewsCtrl'
                    }
                },
                resolve: adminCheck

            })
            //Admin Newsletter
            .state('app.newsletter', {
                url: '^/newsletter',
                controller: 'NewsletterCtrl',
                templateUrl: 'views/admin/newsletter/newsletter.html',
                resolve: adminCheck
            })

            //Admin Log
            .state('app.log', {
                url: '^/log',
                controller: 'LogCtrl',
                templateUrl: 'views/admin/log/log.html',
                resolve: adminCheck
            })

            //Admin Databases
            .state('app.databases', {
                url: '^/databases',
                controller: 'DatabaseCtrl',
                templateUrl: 'views/admin/databases/databases.html',
                resolve: adminCheck
            })

            //////////////////// My Sell Page //////////////

            //My Sells Page
            .state('app.mySellPage', {
                url: '^/:username',
                controller: 'MySellPageCtrl',
                templateUrl: 'views/web/my_sell_page.html'
            });

        $locationProvider.html5Mode(true);

    }]);

