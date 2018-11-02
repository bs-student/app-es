(function () {

    'use strict';

    app
        .controller('FaqCtrl', FaqCtrl);

    FaqCtrl.$inject = ['$scope', '$sce', 'SERVER_CONSTANT'];

    function FaqCtrl($scope, $sce, SERVER_CONSTANT) {

        $scope.appHostPath = SERVER_CONSTANT.HOST_APP;
        $scope.$parent.main.title = "FAQ";
        $scope.$parent.headerStyle = "dark";
        $scope.$parent.activePage = "helpAndSafety";

        $scope.downloadBookmarkForPrint = _downloadBookmarkForPrint;
        $scope.oneAtATime = false;

        $scope.faqList = [


            {
                tabId: "tab_1",
                linkText: "student2student.es",
                active: true,
                faqs: [
                    {
                        question: 'faqScreenTexts.HOW_STUDENT2STUDENT_WORK',
                        answer: $sce.trustAsHtml('<iframe style="border:3px solid #FF530D !important; border-radius: 4px;" width="100%" height="315" src="https://www.youtube.com/embed/uja55f5sCbA" frameborder="0" allowfullscreen></iframe>')
                    },
                    {
                        question: 'faqScreenTexts.IS_STUDENT2STUDENT_FREE',
                        answer: "Sí, estudiante 2 El estudiante es absolutamente gratis para todos los estudiantes. Puedes comprar, vender, comparar, ponerte en contacto con otros estudiantes está disponible para ti sin ningún coste! ¡Queremos que ahorres tiempo y dinero!"
                    },
                    {
                        question: "¿Por qué debes inscribirte en tu Universidad?",
                        answer: " Puedes buscar, comparar y comprar libros de texto sin una cuenta en Student 2 Student. Algunos vendedores solo venden a miembros, por lo que recomendamos inscribirse para poder acceder a todas las opciones. Para poder vender un libro de texto necesitará una cuenta en Student 2 Student. Necesitarás inscribirte en su ubicación de la Universidad / campus."
                    },
                    {
                        question: "¿Necesito una tarjeta de crédito?",
                        answer: $sce.trustAsHtml("¡No! No necesitas tarjeta de crédito para ninguna operación en Student2Student. Nunca proporcione  información de su tarjeta de crédito a nadie. Student2Student no lo requiere, y tampoco sus miembros del Student2Student.")
                    }

                    ,
                    {
                        question: "¿Qué es el concepto de COE (Cash on Exchange)?",
                        answer: "El concepto de efectivo en intercambio (COE) es muy simple. Significa que sólo da el libro de texto cuando el comprador le da el dinero. Intercambio in situ. El comprador consigue los libros de textos :: El vendedor consigue el dinero."
                    }
                ]
            },

            {
                tabId: "tab_3",
                linkText: "Manual del vendedor",
                faqs: [
                    {
                        question: "¿Cómo puedo vender mis libros de texto?",
                        answer: "¡No podría ser más fácil! Inicia sesión o Regístrate, ves a \"Vender libros\", inserta el ISBN y define el acuerdo (precio, fecha disponible, etc.). No necesitas insertar ninguna información de libros de texto. ¡Lo hacemos todo por ti!"
                    },

                    {
                        question: "¿Necesito una cuenta para vender libros de texto?",
                        answer: "Sí, necesitarás una cuenta para vender tus libros de texto a otro estudiante en el campus."
                    },
                    {
                        question: "¿Puedo publicar mis libros de texto en Facebook y Twitter?",
                        answer: "¡Por supuesto! Puedes aumentar tus posibilidades de vender el libro de texto. Cuando vendas el libro de texto, publica el acuerdo en Facebook o Twitter."
                    },
                    {
                        question: '¿El vendedor ve mi nombre e información de contacto?',
                        answer: "Cuando te registras, tienes que definir un apodo para proteger tu nombre real. Los compradores verán tu apodo al buscar libros de texto. Dependiendo de la configuración de tu acuerdo, y de los contactos de Comprador y el Vendedor,  o el Vendedor contacta con el Comprador, y el comprador obtendrá su información de contacto definida en el acuerdo a través de un correo electrónico. El comprador debe solicitar la información. La información de contacto no se publica en Student 2 Student."
                    },
                    {
                        question: "¿Necesito enviar los libros de texto?",
                        answer: "Absolutamente no. Nuestra intención es que se  intercambie el dinero y el libro de texto en el campus de tu universidad. Si un comprador te pide que envíes el libro de texto, depende de ti, si deseas correr el riesgo o no. Student2Student no aconseja el envío de libros de texto."
                    },
                    {
                        question: "¿Puedo vender libros de texto a estudiantes de otras universidades?",
                        answer: "No. Los libros de texto se negocian localmente en el campus. Esto nos proporciona una experiencia sin problemas de compra y venta de libros de texto."
                    },
                    {
                        question: '¿Qué es "Mi página de venta"?',
                        answer: $sce.trustAsHtml("La página \"Mi página de venta\" es su página personalizada en Student 2 Student. Esta página puede ser compartida con cualquier persona en Internet. Sólo muestras el libro de texto que estás vendiendo ahora. De esta manera puedes anunciar tus propios libros de texto en Facebook o Twitter, donde tu prefieras. Lo único que tienes que hacer es compartir la URL.<br><br>Tienes tu propia URL para la página de venta personal: <strong>www.student2student.es/[nickname]</strong><br/>(Ejemplo: Nickname es kittoo12. La página sería entonces: <strong>www.student2student.es/kittoo12</strong>")
                    }


                ]
            },
            {
                tabId: "tab_4",
                linkText: "Manual del comprador",
                faqs: [
                    {
                        question: "¿Necesito una cuenta para comprar libros de texto?",
                        answer: "No necesariamente. Puedes buscar, comparar y comprar libros de texto sin una cuenta en Student 2 Student. Algunos vendedores no venden sus libros de texto a los no miembros. En este caso, necesitarás una cuenta."
                    },
                    {
                        question: "¿Puedo consultar los precios de Amazon y otras tiendas de libros de texto?",
                        answer: "Por Supuesto!  Cuando buscas un libro de texto, verás una comparativa que te indica dónde puedes encontrar tus libros de texto, al mejor precio. ¡Te ayudamos a ahorrar dinero!"
                    },
                    {
                        question: "¿Cómo pago el libro de texto?",
                        answer: "Los libros de texto se venden localmente (en el campus) y deben pagarse en efectivo a la entrega del libro El concepto con el que trabajamos es Cash on Exchange (COE)."
                    },
                    {
                        question: "No puedo encontrar el libro de texto en mi Universidad. ¿Que puedo hacer?",
                        answer: "En el caso raro en el que no pueda encontrar su libro de texto localmente, le daremos una comparación donde obtener el libro de texto más barato. Sólo busque el libro de texto, y la comparación surgirá de inmediato."
                    }

                    ,
                    {
                        question: "¿Por qué no puedo cambiar el acuerdo de libros de texto después de que alguien me contactó?",
                        answer: "No es un error, es una característica. No puedes cambiar ciertos valores del acuerdo, como los precios, cuando el comprador ya ha contactado con el vendedor para adquirir el libro, no se puede modificar el precio. Esta norma protege al comprador de los vendedores que cambian el precio y la información después de cerrado el acuerdo."
                    }
                    ,
                    {
                        question: "¿El vendedor ve mi nombre e información de contacto?",
                        answer: "Esto depende si el vendedor eligió \"Comprador contacta al Vendedor\" o \"Vendedor contacta al Comprador\". En el caso de \"Vendedor contacta al Comprador\", deberás proporcionar la información al vendedor para que pueda ponerse en contacto contigo. De lo contrario el vendedor no verá nada más que tu apodo."
                    }
                    ,
                    {
                        question: "¿Qué es \"Mi Lista de Seguimiento\"?",
                        answer: "El \"My Watchlist\" es una lista de todos los libros de texto que te interesan. Sólo muestra las ofertas de libros de texto en las que se ha intercambiado información entre comprador y vendedor."
                    }
                ]
            },
            {
                tabId: "tab_2",
                linkText: "general",
                faqs: [
                    {
                        question: "¿Qué es un ISBN?",
                        answer: $sce.trustAsHtml('El Número Estándar Internacional de Libros (ISBN) es un número de 10 dígitos que identifica de forma exclusiva los libros y productos similares a libros publicados internacionalmente. <a href="http://www.isbn.org/faqs_general_questions">Más información</a>')
                    }
                    ,
                    {
                        question: "¿Qué es un EAN?",
                        answer: $sce.trustAsHtml('Cada ISBN consta de trece dígitos en 2007. El número de trece dígitos se divide en cinco partes de longitud variable, cada parte separada por un guión. También se llama ISBN-13. <a href="http://www.isbn.org/faqs_general_questions">Más información</a>')
                    }
                ]

            },
            {
                tabId: "tab_5",
                linkText: "Cómo",
                faqs: [
                    {
                        question: "Crea una cuenta",
                        answer: $sce.trustAsHtml('Nada es más fácil que crear su cuenta personal en Student 2 Student. Student 2 Student no requiere que ingrese información personal como número de teléfono, cumpleaños, etc. Sólo necesita una dirección de correo electrónico válida. Haga clic en la imagen para ver un ejemplo de cómo crear una cuenta.<br>' +
                            '<img src="dist/images/faq/signup.png" width="100%"><br/><br/>' +
                            '1. Escribe tu nombre completo <b>(Ej: Joe Miller)</b><br>' +
                            '2. Inserta tu apodo <b>(Ej: Joe.Miller12)</b>. Este es el nombre de otros usuarios del Student 2 Student verá.<br>' +
                            '3. Introduce una dirección de correo electrónico válida. <b>(Ej: Joe.Miller12@student2student.es)</b><br>' +
                            '4. Introduce una contraseña segura. Debe tener un mínimo de 6 caracteres.<br>' +
                            '5. Esta es la entrada más importante. Tienes que elegir el Campus Universitario donde vas a la escuela.<br>' +
                            'Encuentra la universidad escribiendo el nombre de la universidad, la ubicación, la URL de la universidad o la universidad. Cuando empieces a escribir las letras, el sistema extraerá una lista de universidades que ya existen en Student 2 Student. Elige tu Universidad.<br>' +
                            '<b>(Ej:Se escribió en Osh y eligió la Universidad de Wisconsin Oshkosh, Oshkosh (WI), Estados Unidos)</b><br>' +
                            '6. Dínos cómo has conocido de Student 2 Student. <b>(Ej: Facebook)</b><br>' +
                            '7. Completa el captcha<br><br>' +


                            'Haga clic en "Crear mi cuenta" para finalizar el proceso. Lo último que tienes que hacer es activar tu cuenta. Vaya a la cuenta de correo electrónico que ingresó y haga clic en el enlace del correo electrónico de verificación que le enviamos.<br>' +

                            '<br>Todos están listos para comprar, vender y ahorrar!')
                    },
                    {
                        question: "Restablecer mi contraseña",
                        answer: $sce.trustAsHtml('¿Olvidaste tu contraseña? Ningún problema.' +
                            '. Puedes restablecer tu contraseña en la página "Iniciar sesión - Olvidé la contraseña" o haciendo <a href="http://www.student2student.es/forgotPassword">Clic aquí.</a>.<br/><br/>' +

                            '<img src="dist/images/faq/forgotPassword.png" width="100%"><br/><br/>' +

                            '1. Introduce la dirección de correo electrónico que utilizaste cuando registraste tu cuenta. <b>(Ej: joe.miller12@student2student.es)</b><br/>' +

                            '2. Recibirás un correo electrónico con el enlace para restablecer tu contraseña. Ten en cuenta que el enlace sólo funciona durante un corto período de tiempo. Sigue el enlace a Student 2 Student para restablecer tu contraseña.<br/><br/>' +

                            '<img src="dist/images/faq/resetPassword.png" width="100%"><br/><br/>' +


                            '3. Establece tu nueva contraseña.<br/>' +
                            '<br><b>¡Todo listo! Utilice tu nueva contraseña de ahora en adelante.</b>')
                    }
                ]
            },
            {
                tabId: "tab_6",
                linkText: "Políticas",
                faqs: [
                    {
                        question: "Seguridad",
                        answer: $sce.trustAsHtml('Lee nuestra política de privacidad <a href="http://www.student2student.es/privacyPolicy">aquí</a>')
                    },
                    {
                        question: "Renuncia",
                        answer: $sce.trustAsHtml('Leer Aviso legal <a href="http://www.student2student.es/disclaimer">aquí</a>')
                    },
                    {
                        question: "Condición de uso",
                        answer: $sce.trustAsHtml('Leer estado de uso <a href="http://www.student2student.es/conditionOfUse">aquí</a>')
                    }
                ]
            },
            {
                tabId: "tab_7",
                linkText: "Contáctenos",
                faqs: [
                    {
                        question: "¿Aun tienes dudas?",
                        answer: $sce.trustAsHtml('¿Aun tienes dudas? Contáctenos <a href="http://www.student2student.es/contactUs">aquí</a>')
                    }
                ]
            }
        ];

        $scope.active = _active;

        function _active(faq) {
            angular.forEach($scope.faqList, function (faqL) {
                faqL.active = false;
            });
            faq.active = true;
        }


        function _downloadBookmarkForPrint() {
            var downloadLink = angular.element('<a></a>');
            var path = SERVER_CONSTANT.IMAGE_HOST_PATH + "/assets/images/bookmark_for_print.png";
            downloadLink.attr('href', path);
            downloadLink.attr('download', 'BookmarkForPrint.png');
            downloadLink[0].click();
        }
    }


})();


