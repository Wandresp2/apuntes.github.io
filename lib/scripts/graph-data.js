let graphData={graphOptions:{attractionForce:1,linkLength:10,repulsionForce:150,centralForce:3,edgePruning:100,minNodeRadius:3,maxNodeRadius:7},isInitialized:!0,paths:["materias-3°-semestre/calculo-multivariado/1.0.-funciones-vectoriales/ecuacion-cartesiana.html","materias-3°-semestre/calculo-multivariado/1.0.-funciones-vectoriales/funciones-vectoriales-2d.html","materias-3°-semestre/calculo-multivariado/1.0.-funciones-vectoriales/funciones-vectoriales-3d.html","materias-3°-semestre/calculo-multivariado/2.0.-limites/criterio-de-no-existencia.html","materias-3°-semestre/calculo-multivariado/2.0.-limites/introduccion-limites.html","materias-3°-semestre/calculo-multivariado/3.0.-continuidad-derivada/continuidad-y-derivada-de-funciones.html","materias-3°-semestre/calculo-multivariado/4.0.-integrales/integral-de-funciones-vectoriales.html","materias-3°-semestre/calculo-multivariado/4.0.-integrales/longitud,-revolucion-y-area.html","materias-3°-semestre/calculo-multivariado/segundo-corte-(mejorar-orden)/0.1.-derivadas-parciales-de-primer-orden.html","materias-3°-semestre/calculo-multivariado/segundo-corte-(mejorar-orden)/0.2.-vector-gradiente.html","materias-3°-semestre/calculo-multivariado/segundo-corte-(mejorar-orden)/0.3.-derivadas-parciales-de-segundo-orden.html","materias-3°-semestre/calculo-multivariado/segundo-corte-(mejorar-orden)/0.4.-regla-de-la-cadena.html","materias-3°-semestre/calculo-multivariado/segundo-corte-(mejorar-orden)/0.5.-optimizacion-segunda-derivada.html","materias-3°-semestre/calculo-multivariado/segundo-corte-(mejorar-orden)/0.6.-multiplicadores-de-lagrange.html","materias-3°-semestre/calculo-multivariado/segundo-corte-(mejorar-orden)/0.7.-integrales-dobles.html","materias-3°-semestre/calculo-multivariado/0.-calculo-multivariado.html","materias-3°-semestre/programacion-orientada-a-objetos/lenguaje-de-modelado-unificado/diagramas-dinamcos/diagrama-de-caso-de-uso.html","materias-3°-semestre/programacion-orientada-a-objetos/lenguaje-de-modelado-unificado/diagramas-dinamcos/diagrama-de-colaboracion.html","materias-3°-semestre/programacion-orientada-a-objetos/lenguaje-de-modelado-unificado/diagramas-dinamcos/diagrama-de-secuencia.html","materias-3°-semestre/programacion-orientada-a-objetos/lenguaje-de-modelado-unificado/diagramas-estaticos/diagrama-de-clases.html","materias-3°-semestre/programacion-orientada-a-objetos/lenguaje-de-modelado-unificado/diagramas-estaticos/diagrama-de-componentes.html","materias-3°-semestre/programacion-orientada-a-objetos/lenguaje-de-modelado-unificado/diagramas-estaticos/diagrama-de-despliegue.html","materias-3°-semestre/programacion-orientada-a-objetos/lenguaje-de-modelado-unificado/diagramas-estaticos/diagrama-de-objetos.html","materias-3°-semestre/programacion-orientada-a-objetos/lenguaje-de-modelado-unificado/introduccion.html","materias-3°-semestre/programacion-orientada-a-objetos/logica-de-programacion/ciclo-for.html","materias-3°-semestre/programacion-orientada-a-objetos/logica-de-programacion/pseudocodigo.html","materias-3°-semestre/programacion-orientada-a-objetos/logica-de-programacion/while-y-do-while.html","materias-3°-semestre/programacion-orientada-a-objetos/metodos/indices-y-slicing.html","materias-3°-semestre/programacion-orientada-a-objetos/metodos/is-instance.html","materias-3°-semestre/programacion-orientada-a-objetos/metodos/round.html","materias-3°-semestre/programacion-orientada-a-objetos/metodos/split.html","materias-3°-semestre/programacion-orientada-a-objetos/orientado-a-objetos/clases-e-instancias.html","materias-3°-semestre/programacion-orientada-a-objetos/0.-programacion-orientada-a-objetos.html","materias-3°-semestre/teoria-general-de-sistemas/primer-parcial/conceptos.html","materias-3°-semestre/teoria-general-de-sistemas/primer-parcial/que-es-tgs.html","materias-3°-semestre/teoria-general-de-sistemas/primera-entrega-de-tgs/estructura-organizacional.html","materias-3°-semestre/teoria-general-de-sistemas/0.-teoria-general-de-sistemas.html","materias-3°-semestre/teoria-general-de-sistemas/arquetipo-erosion-de-metas.html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-1/0.-cap-1-propiedades-de-los-fluidos..html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-1/1.0.-continuo.html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-1/1.1.-definicion-de-fluido.html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-1/1.2.-dimensiones-y-unidades.html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-1/1.3.-viscosidad.html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-1/1.4.-masa,-peso-y-variables-de-concentracion.html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-2/0.-cap-2-libro-de-cengen.html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-2/2.0.-introduccion.html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-2/2.1.-formas-de-energia.html","materias-3°-semestre/termodinamica-y-fluidos/capitulo-2/2.2.-transferencia-de-energia-por-calor.html","materias-3°-semestre/termodinamica-y-fluidos/gases/ley-de-los-gases-ideales.html","materias-3°-semestre/termodinamica-y-fluidos/segundo-corte/continuidad.html","materias-3°-semestre/termodinamica-y-fluidos/segundo-corte/ecuacion-de-bernoulli´s.html","materias-3°-semestre/termodinamica-y-fluidos/segundo-corte/flujo-turbulento-y-laminar.html","materias-3°-semestre/termodinamica-y-fluidos/segundo-corte/notas-personales.html","materias-3°-semestre/termodinamica-y-fluidos/sistema-de-unidades/1.0.-sistemas-de-unidades.html","materias-3°-semestre/termodinamica-y-fluidos/sistema-de-unidades/1.1.-conversiones-de-unidades.html","materias-3°-semestre/termodinamica-y-fluidos/0.-termodinamica-y-fluidos.html","materias-3°-semestre/0.-tercer-semestre.html"],nodeCount:57,linkSources:[0,1,2,4,5,6,7,8,9,9,10,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,38,39,40,41,42,43,44,45,46,47,48,51,53,54,55],linkTargets:[56,56,56,56,56,56,56,56,56,8,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,42,56,56,56],labels:["Ecuacion cartesiana","Funciones vectoriales - 2D","Funciones vectoriales - 3D","Criterio de No existencia","Introduccion limites","Continuidad y derivada de funciones","Integral de funciones vectoriales","Longitud, revolucion y area","0.1. Derivadas Parciales de primer orden","0.2. Vector gradiente","0.3. Derivadas parciales de segundo orden","0.4. Regla de la cadena","0.5. Optimizacion segunda derivada","0.6. Multiplicadores de Lagrange","0.7. Integrales dobles","0. Calculo Multivariado","Diagrama de caso de uso","Diagrama de colaboracion","Diagrama de secuencia","Diagrama de clases","Diagrama de componentes","Diagrama de despliegue","Diagrama de objetos","Introduccion","Ciclo for","pseudocodigo","while y do while","Indices y slicing","Is instance","Round","Split","Clases e instancias","0. Programacion Orientada a Objetos","Conceptos","Que es TGS","Estructura organizacional","0. Teoria General de Sistemas","Arquetipo erosion de metas","0. Cap 1 - Propiedades de los fluidos.","1.0. Continuo","1.1. Definicion de fluido","1.2. Dimensiones y unidades","1.3. Viscosidad","1.4. Masa, peso y variables de concentracion","0. Cap 2 - libro de Cengen","2.0. Introduccion","2.1. Formas de energia","2.2. Transferencia de energia por calor","Ley de los gases ideales","Continuidad","Ecuacion de Bernoulli´s","flujo turbulento y laminar","Notas personales","1.0. Sistemas de unidades","1.1. Conversiones de unidades","0. Termodinamica y Fluidos","0. Tercer Semestre"],radii:[3.214437618147448,3.214437618147448,3.214437618147448,3,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.42296786389414,3.42296786389414,3.214437618147448,3,3,3,3,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.42296786389414,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3.214437618147448,3,3,3.214437618147448,3,3.214437618147448,3.214437618147448,3.214437618147448,7],linkCount:48}