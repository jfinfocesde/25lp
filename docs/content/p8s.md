# Semana 12 - Ejercicios de Lógica de Programación en Java

## Ejercicio 1: Calculadora de Descuentos en Tienda

**Ubicación Geográfica:** Medellín  
**Área de Aplicación:** Finanzas/Comercio

Una tienda en Medellín ofrece descuentos por volumen de compra. Si el cliente compra más de 5 productos, obtiene un 10% de descuento. Si compra más de 10 productos, obtiene un 15% de descuento. Si compra más de 20 productos, obtiene un 20% de descuento. Además, si el total de la compra supera los $100,000 pesos, obtiene un descuento adicional del 5%. Calcula el precio final que debe pagar un cliente.

```java
public class Main {
    public static void main(String[] args) {
        // Datos del cliente
        int cantidadProductos = 12;
        double precioUnitario = 15000;
        
        // Calcular precio base
        double precioBase = cantidadProductos * precioUnitario;
        double descuentoPorVolumen = 0;
        double descuentoAdicional = 0;
        
        // Aplicar descuento por volumen
        if (cantidadProductos > 20) {
            descuentoPorVolumen = 0.20;
        } else if (cantidadProductos > 10) {
            descuentoPorVolumen = 0.15;
        } else if (cantidadProductos > 5) {
            descuentoPorVolumen = 0.10;
        }
        
        // Calcular precio con descuento por volumen
        double precioConDescuento = precioBase * (1 - descuentoPorVolumen);
        
        // Aplicar descuento adicional si supera $100,000
        if (precioConDescuento > 100000) {
            descuentoAdicional = 0.05;
        }
        
        double precioFinal = precioConDescuento * (1 - descuentoAdicional);
        
        System.out.println("Cantidad de productos: " + cantidadProductos);
        System.out.println("Precio unitario: $" + precioUnitario);
        System.out.println("Precio base: $" + precioBase);
        System.out.println("Descuento por volumen: " + (descuentoPorVolumen * 100) + "%");
        System.out.println("Descuento adicional: " + (descuentoAdicional * 100) + "%");
        System.out.println("Precio final a pagar: $" + precioFinal);
    }
}
```

## Ejercicio 2: Sistema de Calificación Crediticia

**Ubicación Geográfica:** Bogotá  
**Área de Aplicación:** Finanzas/Bancario

Un banco en Bogotá necesita evaluar si puede otorgar un crédito a un cliente. Los criterios son: ingresos mensuales mínimos de $2,000,000, edad entre 18 y 65 años, y que los gastos mensuales no superen el 70% de los ingresos. Si cumple todos los criterios, calcular el monto máximo del crédito (5 veces los ingresos mensuales).

```java
public class Main {
    public static void main(String[] args) {
        // Datos del cliente
        int edad = 35;
        double ingresosMensuales = 3500000;
        double gastosMensuales = 2000000;
        
        boolean cumpleEdad = false;
        boolean cumpleIngresos = false;
        boolean cumpleGastos = false;
        
        // Verificar criterios
        if (edad >= 18 && edad <= 65) {
            cumpleEdad = true;
        }
        
        if (ingresosMensuales >= 2000000) {
            cumpleIngresos = true;
        }
        
        double porcentajeGastos = (gastosMensuales / ingresosMensuales) * 100;
        if (porcentajeGastos <= 70) {
            cumpleGastos = true;
        }
        
        System.out.println("=== EVALUACIÓN CREDITICIA ===");
        System.out.println("Edad: " + edad + " años - " + (cumpleEdad ? "CUMPLE" : "NO CUMPLE"));
        System.out.println("Ingresos: $" + ingresosMensuales + " - " + (cumpleIngresos ? "CUMPLE" : "NO CUMPLE"));
        System.out.println("Gastos: " + porcentajeGastos + "% de ingresos - " + (cumpleGastos ? "CUMPLE" : "NO CUMPLE"));
        
        if (cumpleEdad && cumpleIngresos && cumpleGastos) {
            double montoMaximoCredito = ingresosMensuales * 5;
            System.out.println("RESULTADO: CRÉDITO APROBADO");
            System.out.println("Monto máximo del crédito: $" + montoMaximoCredito);
        } else {
            System.out.println("RESULTADO: CRÉDITO RECHAZADO");
        }
    }
}
```

## Ejercicio 3: Control de Inventario de Mercado

**Ubicación Geográfica:** Cartagena  
**Área de Aplicación:** Comercio/Logística

Un mercado en Cartagena necesita controlar su inventario de frutas. Cada día se venden diferentes cantidades y llegan nuevos productos. Si el inventario de alguna fruta baja de 10 unidades, se debe hacer un pedido de 50 unidades. Simula una semana de ventas y reposición.

```java
public class Main {
    public static void main(String[] args) {
        // Inventario inicial
        int mangos = 25;
        int bananos = 15;
        int naranjas = 8;
        
        // Ventas diarias durante una semana (7 días)
        int[] ventasMangos = {3, 5, 2, 7, 4, 6, 3};
        int[] ventasBananos = {2, 4, 3, 5, 2, 4, 3};
        int[] ventasNaranjas = {1, 2, 3, 2, 1, 3, 2};
        
        System.out.println("=== CONTROL DE INVENTARIO SEMANAL ===");
        System.out.println("Inventario inicial - Mangos: " + mangos + ", Bananos: " + bananos + ", Naranjas: " + naranjas);
        
        for (int dia = 0; dia < 7; dia++) {
            System.out.println("\n--- DÍA " + (dia + 1) + " ---");
            
            // Procesar ventas
            mangos -= ventasMangos[dia];
            bananos -= ventasBananos[dia];
            naranjas -= ventasNaranjas[dia];
            
            System.out.println("Ventas - Mangos: " + ventasMangos[dia] + ", Bananos: " + ventasBananos[dia] + ", Naranjas: " + ventasNaranjas[dia]);
            System.out.println("Inventario después de ventas - Mangos: " + mangos + ", Bananos: " + bananos + ", Naranjas: " + naranjas);
            
            // Verificar si necesita reposición
            if (mangos < 10) {
                mangos += 50;
                System.out.println("¡REPOSICIÓN! Se agregaron 50 mangos. Nuevo inventario: " + mangos);
            }
            
            if (bananos < 10) {
                bananos += 50;
                System.out.println("¡REPOSICIÓN! Se agregaron 50 bananos. Nuevo inventario: " + bananos);
            }
            
            if (naranjas < 10) {
                naranjas += 50;
                System.out.println("¡REPOSICIÓN! Se agregaron 50 naranjas. Nuevo inventario: " + naranjas);
            }
        }
        
        System.out.println("\n=== INVENTARIO FINAL ===");
        System.out.println("Mangos: " + mangos + ", Bananos: " + bananos + ", Naranjas: " + naranjas);
    }
}
```

## Ejercicio 4: Calculadora de Tiempo de Viaje en Transporte Público

**Ubicación Geográfica:** Medellín  
**Área de Aplicación:** Transporte/Logística

Una persona en Medellín necesita calcular el tiempo total de viaje usando diferentes medios de transporte público. Debe tomar un bus (20 minutos), luego el metro (15 minutos), y finalmente caminar (10 minutos). Si hay tráfico pesado, el tiempo del bus se incrementa en 50%. Si llueve, el tiempo de caminar se incrementa en 100%.

```java
public class Main {
    public static void main(String[] args) {
        // Tiempos base en minutos
        int tiempoBus = 20;
        int tiempoMetro = 15;
        int tiempoCaminar = 10;
        
        // Condiciones del día
        boolean trafficoPesado = true;
        boolean llueve = false;
        
        // Calcular tiempos ajustados
        double tiempoBusAjustado = tiempoBus;
        double tiempoCaminarAjustado = tiempoCaminar;
        
        if (trafficoPesado) {
            tiempoBusAjustado = tiempoBus * 1.5; // Incremento del 50%
        }
        
        if (llueve) {
            tiempoCaminarAjustado = tiempoCaminar * 2; // Incremento del 100%
        }
        
        double tiempoTotal = tiempoBusAjustado + tiempoMetro + tiempoCaminarAjustado;
        
        System.out.println("=== CALCULADORA DE TIEMPO DE VIAJE ===");
        System.out.println("Condiciones del día:");
        System.out.println("- Tráfico pesado: " + (trafficoPesado ? "SÍ" : "NO"));
        System.out.println("- Llueve: " + (llueve ? "SÍ" : "NO"));
        System.out.println();
        System.out.println("Tiempos de viaje:");
        System.out.println("- Bus: " + tiempoBusAjustado + " minutos");
        System.out.println("- Metro: " + tiempoMetro + " minutos");
        System.out.println("- Caminar: " + tiempoCaminarAjustado + " minutos");
        System.out.println();
        System.out.println("TIEMPO TOTAL DE VIAJE: " + tiempoTotal + " minutos");
        
        // Convertir a horas y minutos si es mayor a 60 minutos
        if (tiempoTotal >= 60) {
            int horas = (int) (tiempoTotal / 60);
            int minutos = (int) (tiempoTotal % 60);
            System.out.println("Equivale a: " + horas + " hora(s) y " + minutos + " minuto(s)");
        }
    }
}
```

## Ejercicio 5: Sistema de Gestión de Vuelos

**Ubicación Geográfica:** Aeropuerto El Dorado, Bogotá  
**Área de Aplicación:** Transporte/Aviación

El aeropuerto El Dorado necesita un sistema para determinar el estado de los vuelos. Un vuelo puede estar: a tiempo, retrasado (más de 15 minutos), o cancelado. Si hay mal clima, todos los vuelos se retrasan 30 minutos adicionales. Simula el estado de 5 vuelos en un día con condiciones climáticas variables.

```java
public class Main {
    public static void main(String[] args) {
        // Datos de los vuelos (retraso inicial en minutos)
        String[] codigosVuelo = {"AV123", "LA456", "CM789", "VV012", "WI345"};
        int[] retrasoInicial = {0, 10, 25, 0, 45};
        String[] destinos = {"Miami", "Madrid", "Lima", "Panamá", "México"};
        
        // Condiciones climáticas
        boolean malClima = true;
        int retrasoAdicionalClima = 30;
        
        System.out.println("=== SISTEMA DE GESTIÓN DE VUELOS ===");
        System.out.println("Aeropuerto El Dorado - Bogotá");
        System.out.println("Condiciones climáticas: " + (malClima ? "MAL CLIMA" : "BUEN CLIMA"));
        System.out.println();
        
        for (int i = 0; i < codigosVuelo.length; i++) {
            int retrasoTotal = retrasoInicial[i];
            String estado = "";
            
            // Aplicar retraso por mal clima
            if (malClima) {
                retrasoTotal += retrasoAdicionalClima;
            }
            
            // Determinar estado del vuelo
            if (retrasoTotal == 0) {
                estado = "A TIEMPO";
            } else if (retrasoTotal <= 15) {
                estado = "LEVE RETRASO";
            } else if (retrasoTotal <= 60) {
                estado = "RETRASADO";
            } else {
                estado = "CANCELADO";
            }
            
            System.out.println("Vuelo " + codigosVuelo[i] + " hacia " + destinos[i]);
            System.out.println("  Retraso inicial: " + retrasoInicial[i] + " min");
            if (malClima) {
                System.out.println("  Retraso por clima: " + retrasoAdicionalClima + " min");
            }
            System.out.println("  Retraso total: " + retrasoTotal + " min");
            System.out.println("  Estado: " + estado);
            System.out.println();
        }
    }
}
```

## Ejercicio 6: Optimizador de Rutas de Entrega

**Ubicación Geográfica:** Cali  
**Área de Aplicación:** Logística/Distribución

Una empresa de entregas en Cali necesita optimizar las rutas de sus conductores. Cada conductor puede trabajar máximo 8 horas al día. Cada entrega toma entre 30-60 minutos dependiendo de la zona (centro: 30 min, periferia: 45 min, rural: 60 min). Calcula cuántas entregas puede hacer un conductor en un día.

```java
public class Main {
    public static void main(String[] args) {
        // Configuración del día
        int horasMaximasTrabajo = 8;
        int minutosMaximosTrabajo = horasMaximasTrabajo * 60;
        
        // Tipos de zona y sus tiempos (en minutos)
        int tiempoCentro = 30;
        int tiempoPeriferia = 45;
        int tiempoRural = 60;
        
        // Entregas programadas por zona
        int entregasCentro = 5;
        int entregasPeriferia = 4;
        int entregasRural = 2;
        
        // Calcular tiempo total necesario
        int tiempoTotalCentro = entregasCentro * tiempoCentro;
        int tiempoTotalPeriferia = entregasPeriferia * tiempoPeriferia;
        int tiempoTotalRural = entregasRural * tiempoRural;
        int tiempoTotalNecesario = tiempoTotalCentro + tiempoTotalPeriferia + tiempoTotalRural;
        
        System.out.println("=== OPTIMIZADOR DE RUTAS DE ENTREGA ===");
        System.out.println("Empresa de entregas - Cali");
        System.out.println();
        System.out.println("Entregas programadas:");
        System.out.println("- Centro: " + entregasCentro + " entregas × " + tiempoCentro + " min = " + tiempoTotalCentro + " min");
        System.out.println("- Periferia: " + entregasPeriferia + " entregas × " + tiempoPeriferia + " min = " + tiempoTotalPeriferia + " min");
        System.out.println("- Rural: " + entregasRural + " entregas × " + tiempoRural + " min = " + tiempoTotalRural + " min");
        System.out.println();
        System.out.println("Tiempo total necesario: " + tiempoTotalNecesario + " minutos");
        System.out.println("Tiempo máximo disponible: " + minutosMaximosTrabajo + " minutos");
        
        if (tiempoTotalNecesario <= minutosMaximosTrabajo) {
            int tiempoSobrante = minutosMaximosTrabajo - tiempoTotalNecesario;
            System.out.println("RESULTADO: ✓ TODAS LAS ENTREGAS SON POSIBLES");
            System.out.println("Tiempo sobrante: " + tiempoSobrante + " minutos");
            
            // Calcular entregas adicionales posibles
            int entregasAdicionalesCentro = tiempoSobrante / tiempoCentro;
            System.out.println("Entregas adicionales posibles en centro: " + entregasAdicionalesCentro);
        } else {
            int tiempoExcedente = tiempoTotalNecesario - minutosMaximosTrabajo;
            System.out.println("RESULTADO: ✗ NO ES POSIBLE COMPLETAR TODAS LAS ENTREGAS");
            System.out.println("Tiempo excedente: " + tiempoExcedente + " minutos");
            System.out.println("Se necesita reprogramar o asignar a otro conductor");
        }
    }
}
```

## Ejercicio 7: Monitor de Rutina de Ejercicios

**Ubicación Geográfica:** Gimnasio en Barranquilla  
**Área de Aplicación:** Salud/Deporte

Un gimnasio en Barranquilla necesita un sistema para monitorear las rutinas de ejercicio de sus clientes. Cada ejercicio quema diferentes calorías por minuto: cardio (10 cal/min), pesas (8 cal/min), yoga (5 cal/min). Si el cliente supera 500 calorías quemadas, recibe un bono de 50 puntos. Calcula las calorías totales y puntos ganados.

```java
public class Main {
    public static void main(String[] args) {
        // Datos del cliente
        String nombreCliente = "María González";
        
        // Calorías por minuto según tipo de ejercicio
        int caloriasPorMinutoCardio = 10;
        int caloriasPorMinutoPesas = 8;
        int caloriasPorMinutoYoga = 5;
        
        // Tiempo dedicado a cada ejercicio (en minutos)
        int tiempoCardio = 30;
        int tiempoPesas = 45;
        int tiempoYoga = 20;
        
        // Calcular calorías quemadas por ejercicio
        int caloriasCardio = tiempoCardio * caloriasPorMinutoCardio;
        int caloriasPesas = tiempoPesas * caloriasPorMinutoPesas;
        int caloriasYoga = tiempoYoga * caloriasPorMinutoYoga;
        int caloriasTotal = caloriasCardio + caloriasPesas + caloriasYoga;
        
        // Sistema de puntos
        int puntos = 0;
        if (caloriasTotal > 500) {
            puntos = 50;
        }
        
        // Tiempo total de ejercicio
        int tiempoTotal = tiempoCardio + tiempoPesas + tiempoYoga;
        
        System.out.println("=== MONITOR DE RUTINA DE EJERCICIOS ===");
        System.out.println("Gimnasio Barranquilla");
        System.out.println("Cliente: " + nombreCliente);
        System.out.println();
        System.out.println("Rutina del día:");
        System.out.println("- Cardio: " + tiempoCardio + " min × " + caloriasPorMinutoCardio + " cal/min = " + caloriasCardio + " calorías");
        System.out.println("- Pesas: " + tiempoPesas + " min × " + caloriasPorMinutoPesas + " cal/min = " + caloriasPesas + " calorías");
        System.out.println("- Yoga: " + tiempoYoga + " min × " + caloriasPorMinutoYoga + " cal/min = " + caloriasYoga + " calorías");
        System.out.println();
        System.out.println("RESUMEN:");
        System.out.println("Tiempo total de ejercicio: " + tiempoTotal + " minutos");
        System.out.println("Calorías totales quemadas: " + caloriasTotal + " calorías");
        System.out.println("Puntos ganados: " + puntos + " puntos");
        
        if (puntos > 0) {
            System.out.println("¡FELICITACIONES! Has superado las 500 calorías y ganaste un bono.");
        }
    }
}
```

## Ejercicio 8: Sistema de Triaje Hospitalario

**Ubicación Geográfica:** Hospital en Bucaramanga  
**Área de Aplicación:** Salud/Medicina

Un hospital en Bucaramanga necesita clasificar pacientes según la urgencia de su atención. Los criterios son: temperatura (>38.5°C = urgente), presión arterial (>140/90 = urgente), dolor (escala 8-10 = urgente). Clasifica a 5 pacientes en: urgente, prioritario, o normal.

```java
public class Main {
    public static void main(String[] args) {
        // Datos de los pacientes
        String[] nombres = {"Juan Pérez", "Ana López", "Carlos Ruiz", "María Silva", "Pedro Gómez"};
        double[] temperaturas = {37.2, 39.1, 36.8, 38.7, 37.5};
        int[] presionSistolica = {120, 150, 110, 135, 145};
        int[] presionDiastolica = {80, 95, 70, 85, 92};
        int[] nivelDolor = {3, 9, 1, 6, 8};
        
        System.out.println("=== SISTEMA DE TRIAJE HOSPITALARIO ===");
        System.out.println("Hospital Bucaramanga");
        System.out.println();
        
        for (int i = 0; i < nombres.length; i++) {
            boolean esUrgente = false;
            String razonUrgencia = "";
            
            // Verificar criterios de urgencia
            if (temperaturas[i] > 38.5) {
                esUrgente = true;
                razonUrgencia += "Fiebre alta (" + temperaturas[i] + "°C) ";
            }
            
            if (presionSistolica[i] > 140 || presionDiastolica[i] > 90) {
                esUrgente = true;
                razonUrgencia += "Presión alta (" + presionSistolica[i] + "/" + presionDiastolica[i] + ") ";
            }
            
            if (nivelDolor[i] >= 8) {
                esUrgente = true;
                razonUrgencia += "Dolor severo (nivel " + nivelDolor[i] + ") ";
            }
            
            // Determinar clasificación
            String clasificacion = "";
            if (esUrgente) {
                clasificacion = "URGENTE";
            } else if (temperaturas[i] > 37.5 || presionSistolica[i] > 130 || nivelDolor[i] >= 5) {
                clasificacion = "PRIORITARIO";
            } else {
                clasificacion = "NORMAL";
            }
            
            System.out.println("Paciente: " + nombres[i]);
            System.out.println("  Temperatura: " + temperaturas[i] + "°C");
            System.out.println("  Presión arterial: " + presionSistolica[i] + "/" + presionDiastolica[i] + " mmHg");
            System.out.println("  Nivel de dolor: " + nivelDolor[i] + "/10");
            System.out.println("  Clasificación: " + clasificacion);
            if (esUrgente) {
                System.out.println("  Razón: " + razonUrgencia);
            }
            System.out.println();
        }
    }
}
```

## Ejercicio 9: Calculadora de Notas y Promedio Estudiantil

**Ubicación Geográfica:** Universidad en Manizales  
**Área de Aplicación:** Educación

Una universidad en Manizales necesita calcular el promedio final de sus estudiantes. Las notas se distribuyen así: 30% parciales, 40% proyecto final, 30% participación. Si el promedio es ≥4.0 aprueba, si es ≥3.5 va a supletorio, si es <3.5 reprueba. Calcula el resultado para 3 estudiantes.

```java
public class Main {
    public static void main(String[] args) {
        // Datos de los estudiantes
        String[] nombres = {"Alejandra Moreno", "Santiago Vargas", "Camila Herrera"};
        double[] notasParciales = {3.8, 4.2, 2.9};
        double[] notasProyecto = {4.5, 3.7, 3.2};
        double[] notasParticipacion = {4.0, 4.8, 4.1};
        
        // Porcentajes de evaluación
        double porcentajeParciales = 0.30;
        double porcentajeProyecto = 0.40;
        double porcentajeParticipacion = 0.30;
        
        System.out.println("=== CALCULADORA DE NOTAS Y PROMEDIO ESTUDIANTIL ===");
        System.out.println("Universidad de Manizales");
        System.out.println("Distribución: Parciales 30%, Proyecto 40%, Participación 30%");
        System.out.println();
        
        for (int i = 0; i < nombres.length; i++) {
            // Calcular promedio ponderado
            double promedioFinal = (notasParciales[i] * porcentajeParciales) + 
                                  (notasProyecto[i] * porcentajeProyecto) + 
                                  (notasParticipacion[i] * porcentajeParticipacion);
            
            // Determinar resultado
            String resultado = "";
            if (promedioFinal >= 4.0) {
                resultado = "APROBADO";
            } else if (promedioFinal >= 3.5) {
                resultado = "SUPLETORIO";
            } else {
                resultado = "REPROBADO";
            }
            
            System.out.println("Estudiante: " + nombres[i]);
            System.out.println("  Parciales: " + notasParciales[i] + " (30%)");
            System.out.println("  Proyecto: " + notasProyecto[i] + " (40%)");
            System.out.println("  Participación: " + notasParticipacion[i] + " (30%)");
            System.out.println("  Promedio final: " + String.format("%.2f", promedioFinal));
            System.out.println("  Resultado: " + resultado);
            System.out.println();
        }
    }
}
```

## Ejercicio 10: Sistema de Riego Automático para Cultivos

**Ubicación Geográfica:** Granja en Boyacá  
**Área de Aplicación:** Agricultura

Una granja en Boyacá tiene un sistema de riego automático que debe activarse según las condiciones del cultivo. Si la humedad del suelo es <30%, se activa riego por 60 minutos. Si la temperatura es >25°C y humedad <50%, se activa por 30 minutos. Si llovió en las últimas 24 horas, no se activa el riego. Simula el sistema durante una semana.

```java
public class Main {
    public static void main(String[] args) {
        // Datos de la semana (7 días)
        String[] dias = {"Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"};
        double[] humedadSuelo = {25, 45, 60, 35, 20, 55, 40};
        double[] temperatura = {28, 22, 24, 30, 26, 19, 27};
        boolean[] llovio = {false, true, false, false, false, true, false};
        
        int totalMinutosRiego = 0;
        
        System.out.println("=== SISTEMA DE RIEGO AUTOMÁTICO ===");
        System.out.println("Granja en Boyacá");
        System.out.println();
        
        for (int i = 0; i < dias.length; i++) {
            int minutosRiego = 0;
            String razon = "";
            
            System.out.println(dias[i] + ":");
            System.out.println("  Humedad del suelo: " + humedadSuelo[i] + "%");
            System.out.println("  Temperatura: " + temperatura[i] + "°C");
            System.out.println("  Llovió: " + (llovio[i] ? "SÍ" : "NO"));
            
            // Verificar condiciones de riego
            if (llovio[i]) {
                razon = "No se riega porque llovió";
            } else if (humedadSuelo[i] < 30) {
                minutosRiego = 60;
                razon = "Riego por humedad muy baja (<30%)";
            } else if (temperatura[i] > 25 && humedadSuelo[i] < 50) {
                minutosRiego = 30;
                razon = "Riego por temperatura alta y humedad media";
            } else {
                razon = "No se requiere riego";
            }
            
            totalMinutosRiego += minutosRiego;
            
            System.out.println("  Tiempo de riego: " + minutosRiego + " minutos");
            System.out.println("  Razón: " + razon);
            System.out.println();
        }
        
        System.out.println("=== RESUMEN SEMANAL ===");
        System.out.println("Total de minutos de riego: " + totalMinutosRiego);
        System.out.println("Promedio diario: " + (totalMinutosRiego / 7) + " minutos");
        
        // Convertir a horas si es necesario
        if (totalMinutosRiego >= 60) {
            int horas = totalMinutosRiego / 60;
            int minutos = totalMinutosRiego % 60;
            System.out.println("Equivale a: " + horas + " hora(s) y " + minutos + " minuto(s)");
        }
    }
}
```