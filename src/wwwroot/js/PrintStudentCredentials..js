window.printStudentCredentials = function(studentId, tempPassword) {
    if (!studentId || !tempPassword) {
        console.error('Datos de estudiante no disponibles');
        alert('No se pudo obtener la información del estudiante');
        return;
    }

    const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Credenciales de Acceso - Boletta</title>
        <style>
            @page {
                size: letter;
                margin: 20mm;
            }
            body {
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 14px;
                color: #333333;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: #ffffff;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .container {
                max-width: 700px;
                margin: 0 auto;
                border: 1px solid #d1d5db;
                border-radius: 8px;
                padding: 40px;
                box-sizing: border-box;
            }
            .header {
                text-align: center;
                border-bottom: 2px solid #2563eb;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            .header h1 {
                margin: 0;
                font-size: 26px;
                color: #1e3a8a;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .header p {
                margin: 5px 0 0 0;
                font-size: 13px;
                color: #6b7280;
            }
            .section-title {
                font-size: 15px;
                font-weight: bold;
                color: #1e3a8a;
                margin-top: 25px;
                margin-bottom: 10px;
                border-left: 4px solid #2563eb;
                padding-left: 8px;
            }
            .credentials-box {
                background-color: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 6px;
                padding: 24px;
                margin: 20px 0;
                text-align: center;
            }
            .credential-item {
                margin: 8px 0;
                font-size: 15px;
            }
            .credential-item span {
                font-weight: bold;
                color: #0f172a;
            }
            .password-highlight {
                font-family: "Courier New", monospace;
                font-size: 20px;
                background-color: #e0f2fe;
                color: #0369a1;
                padding: 6px 16px;
                border-radius: 4px;
                letter-spacing: 2px;
                display: inline-block;
                margin-top: 6px;
                border: 1px dashed #bae6fd;
            }
            ul, ol {
                margin: 10px 0;
                padding-left: 20px;
            }
            li {
                margin-bottom: 6px;
            }
            .footer {
                margin-top: 40px;
                text-align: center;
                font-size: 12px;
                color: #9ca3af;
                border-top: 1px solid #e5e7eb;
                padding-top: 15px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Boletta</h1>
                <p>Plataforma de Gestión y Consulta Estudiantil</p>
            </div>
            
            <div class="section-title">Credenciales de Acceso</div>
            <p>A continuación se detallan los datos de acceso provisionales para el ingreso al portal:</p>
            
            <div class="credentials-box">
                <div class="credential-item">
                    Código de Estudiante: <span>${studentId}</span>
                </div>
                <div class="credential-item" style="margin-top: 16px;">
                    Contraseña:<br>
                    <div class="password-highlight">${tempPassword}</div>
                </div>
            </div>

            <div class="section-title">Requisitos para la Visualización de Notas</div>
            <ul>
                <li>Debe encontrarse al día con sus pagos y mensualidades correspondientes.</li>
            </ul>

            <div class="section-title">Recomendaciones de Seguridad</div>
            <ul>
                <li>No comparta sus credenciales de acceso con terceras personas.</li>
                <li>Guarde esta información en un lugar seguro o modifique su contraseña al ingresar.</li>
            </ul>

            <div class="footer">
                Fecha de emisión: ${new Date().toLocaleDateString()} | Soporte Técnico: soporte@boletta.app
            </div>
        </div>
    </body>
    </html>
    `;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert('Por favor permite ventanas emergentes para imprimir');
        return;
    }

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();

    setTimeout(() => {
        printWindow.print();
    }, 300);
};