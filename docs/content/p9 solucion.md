### Ejercicio 1: Control de precios en una tienda
**Enunciado:** Una tienda necesita administrar su inventario. Desarrolla un programa que guarde 5 productos en un arreglo (nombre y precio en pesos) y muestre, con un ciclo y una condición, solo los que superen los 50.000 COP.

**Solución:**
```java
import java.util.Scanner;

public class ControlPrecios {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] nombres = new String[5];
        double[] precios = new double[5];
        
        for (int i = 0; i < 5; i++) {
            System.out.print("Nombre producto " + (i + 1) + ": ");
            nombres[i] = sc.nextLine();
            System.out.print("Precio (COP): ");
            precios[i] = sc.nextDouble();
            sc.nextLine();
        }
        
        System.out.println("\nProductos > 50.000 COP:");
        for (int i = 0; i < 5; i++) {
            if (precios[i] > 50000) {
                System.out.println(nombres[i] + ": $" + precios[i]);
            }
        }
        sc.close();
    }
}
```

---

### Ejercicio 2: Registro de horas de trabajadores
**Enunciado:** Una empresa colombiana registra las horas laboradas por 3 trabajadores durante 5 días. Usa un arreglo bidimensional para almacenar los datos y calcula el total de horas por trabajador con ciclos.

**Solución:**
```java
import java.util.Scanner;

public class RegistroHoras {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double[][] horas = new double[3][5];
        
        for (int i = 0; i < 3; i++) {
            System.out.println("Trabajador " + (i + 1) + ":");
            for (int j = 0; j < 5; j++) {
                System.out.print("Horas día " + (j + 1) + ": ");
                horas[i][j] = sc.nextDouble();
            }
        }
        
        for (int i = 0; i < 3; i++) {
            double total = 0;
            for (int j = 0; j < 5; j++) {
                total += horas[i][j];
            }
            System.out.println("Trabajador " + (i + 1) + ": " + total + " horas");
        }
        sc.close();
    }
}
```

---

### Ejercicio 3: Análisis de notas escolares
**Enunciado:** Un maestro necesita registrar las notas de 10 estudiantes en un ArrayList (escala 0-5, típica en Colombia). Calcula el promedio y cuenta cuántos aprobaron con 3.5 o más usando ciclos.

**Solución:**
```java
import java.util.ArrayList;
import java.util.Scanner;

public class AnalisisNotas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Double> notas = new ArrayList<>();
        
        for (int i = 0; i < 10; i++) {
            System.out.print("Nota estudiante " + (i + 1) + " (0-5): ");
            notas.add(sc.nextDouble());
        }
        
        double suma = 0;
        int aprobados = 0;
        for (double nota : notas) {
            suma += nota;
            if (nota >= 3.5) aprobados++;
        }
        
        System.out.println("Promedio: " + (suma / 10));
        System.out.println("Aprobados (>=3.5): " + aprobados);
        sc.close();
    }
}
```

---

### Ejercicio 4: Simulación de retiro en cajero automático
**Enunciado:** Diseña un programa que simule un cajero automático con un arreglo de 4 billetes (100.000, 50.000, 20.000, 10.000 COP). Pide un monto y calcula cómo entregarlo con la menor cantidad de billetes usando ciclos y condiciones.

**Solución:**
```java
import java.util.Scanner;

public class CajeroAutomatico {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] billetes = {100000, 50000, 20000, 10000};
        
        System.out.print("Monto a retirar (COP): ");
        int monto = sc.nextInt();
        
        for (int i = 0; i < billetes.length; i++) {
            int cantidad = monto / billetes[i];
            if (cantidad > 0) {
                System.out.println("$" + billetes[i] + " x " + cantidad);
                monto %= billetes[i];
            }
        }
        
        if (monto > 0) System.out.println("Restante: $" + monto);
        sc.close();
    }
}
```

---

### Ejercicio 5: Revisión de ventas diarias
**Enunciado:** Un vendedor colombiano registra sus ventas de 7 días en un arreglo (en pesos). Crea un programa que determine el día de mayor y menor venta usando un ciclo.

**Solución:**
```java
import java.util.Scanner;

public class RevisionVentas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double[] ventas = new double[7];
        
        for (int i = 0; i < 7; i++) {
            System.out.print("Ventas día " + (i + 1) + " (COP): ");
            ventas[i] = sc.nextDouble();
        }
        
        int maxDia = 0, minDia = 0;
        for (int i = 1; i < 7; i++) {
            if (ventas[i] > ventas[maxDia]) maxDia = i;
            if (ventas[i] < ventas[minDia]) minDia = i;
        }
        
        System.out.println("Día mayor venta: " + (maxDia + 1) + " ($" + ventas[maxDia] + ")");
        System.out.println("Día menor venta: " + (minDia + 1) + " ($" + ventas[minDia] + ")");
        sc.close();
    }
}
```

---

### Ejercicio 6: Priorización de pacientes en un centro de salud
**Enunciado:** Un centro de salud registra 5 pacientes en un ArrayList, con nombre y prioridad (1=alta, 2=media, 3=baja). Muestra los pacientes ordenados por prioridad usando ciclos y condiciones.

**Solución:**
```java
import java.util.ArrayList;
import java.util.Scanner;

public class CentroSalud {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> nombres = new ArrayList<>();
        ArrayList<Integer> prioridades = new ArrayList<>();
        
        for (int i = 0; i < 5; i++) {
            System.out.print("Paciente " + (i + 1) + " - Nombre: ");
            nombres.add(sc.nextLine());
            System.out.print("Prioridad (1=alta, 2=media, 3=baja): ");
            prioridades.add(sc.nextInt());
            sc.nextLine();
        }
        
        for (int p = 1; p <= 3; p++) {
            System.out.println("Prioridad " + p + ":");
            for (int i = 0; i < 5; i++) {
                if (prioridades.get(i) == p) {
                    System.out.println("- " + nombres.get(i));
                }
            }
        }
        sc.close();
    }
}
```

---

### Ejercicio 7: Evaluación de productos fabricados
**Enunciado:** Una fábrica evalúa 50 productos, registrando su estado en un arreglo (1=bueno, 0=defectuoso). Calcula cuántos son defectuosos, cuántos buenos y el porcentaje de defectos con ciclos y condiciones.

**Solución:**
```java
import java.util.Scanner;

public class EvaluacionProductos {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] estado = new int[50];
        
        for (int i = 0; i < 50; i++) {
            System.out.print("Producto " + (i + 1) + " (1=bueno, 0=defectuoso): ");
            estado[i] = sc.nextInt();
        }
        
        int defectuosos = 0;
        for (int valor : estado) {
            if (valor == 0) defectuosos++;
        }
        
        System.out.println("Buenos: " + (50 - defectuosos));
        System.out.println("Defectuosos: " + defectuosos);
        System.out.println("Porcentaje defectuosos: " + (defectuosos * 100.0 / 50) + "%");
        sc.close();
    }
}
```

---

### Ejercicio 8: Horarios de transporte público
**Enunciado:** Una empresa de buses tiene 6 horarios de salida en un arreglo (formato 24h, ej. 7.00). Pide al usuario una hora y encuentra el próximo bus disponible con ciclos y condiciones.

**Solución:**
```java
import java.util.Scanner;

public class TransportePublico {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double[] horarios = {7.00, 9.30, 12.00, 14.30, 17.00, 19.30};
        
        System.out.print("Hora actual (ej. 13.45): ");
        double hora = sc.nextDouble();
        
        double proximo = -1;
        for (double h : horarios) {
            if (h > hora) {
                proximo = h;
                break;
            }
        }
        
        if (proximo == -1) {
            System.out.println("No hay más buses hoy.");
        } else {
            System.out.println("Próximo bus: " + proximo);
        }
        sc.close();
    }
}
```

---

### Ejercicio 9: Clasificación de compras en un mercado
**Enunciado:** Un mercado clasifica a 8 clientes según sus compras en un ArrayList (<50.000 COP=pequeño, 50.000-100.000 COP=mediano, >100.000 COP=grande). Registra los montos y muestra cuántos hay por categoría con ciclos y condiciones.

**Solución:**
```java
import java.util.ArrayList;
import java.util.Scanner;

public class ClasificacionCompras {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Double> compras = new ArrayList<>();
        
        for (int i = 0; i < 8; i++) {
            System.out.print("Compra " + (i + 1) + " (COP): ");
            compras.add(sc.nextDouble());
        }
        
        int pequeno = 0, mediano = 0, grande = 0;
        for (double compra : compras) {
            if (compra < 50000) pequeno++;
            else if (compra <= 100000) mediano++;
            else grande++;
        }
        
        System.out.println("Pequeños (<50.000): " + pequeno);
        System.out.println("Medianos (50.000-100.000): " + mediano);
        System.out.println("Grandes (>100.000): " + grande);
        sc.close();
    }
}
```

---

### Ejercicio 10: Monitoreo de temperatura ambiental
**Enunciado:** Una empresa mide la temperatura cada hora durante 12 horas en un arreglo. Calcula cuántas veces superó los 35°C y cuántas estuvo por debajo de 20°C, típicas en Colombia, usando ciclos y condiciones.

**Solución:**
```java
import java.util.Scanner;

public class MonitoreoTemperatura {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double[] temperaturas = new double[12];
        
        for (int i = 0; i < 12; i++) {
            System.out.print("Temperatura hora " + (i + 1) + " (°C): ");
            temperaturas[i] = sc.nextDouble();
        }
        
        int altas = 0, bajas = 0;
        for (double temp : temperaturas) {
            if (temp > 35) altas++;
            if (temp < 20) bajas++;
        }
        
        System.out.println("Veces > 35°C: " + altas);
        System.out.println("Veces < 20°C: " + bajas);
        sc.close();
    }
}
```

---

