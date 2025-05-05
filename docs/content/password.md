# Generar contraseña SHA256 para bloquear contenido

```bash
powershell -Command "[System.BitConverter]::ToString([System.Security.Cryptography.SHA256]::Create().ComputeHash([System.Text.Encoding]::UTF8.GetBytes('158789'))).Replace('-','').ToLower()"
```

# Platilla para bloquear contenido


```html
<div class="password-protected" data-password-hash="f31db6afee933ea691fe16079e00334db73dd8ccadce944d">
  <div class="password-form">
    <p>Este contenido está protegido. Por favor, ingresa la contraseña para acceder:</p>
    <input type="password" class="password-input" placeholder="Contraseña">
    <button class="password-submit md-button md-button--primary">Acceder</button>
    <p class="password-hint" style="display: none;"></p>
  </div>        
  <div class="protected-content">
    <!-- Aquí va el contenido que deseas proteger -->
    <p>Este es el contenido protegido.</p>
  </div>
</div>
``` 


