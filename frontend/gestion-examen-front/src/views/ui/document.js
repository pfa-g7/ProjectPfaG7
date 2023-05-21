const printDocument = (student) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
    <html>
      <head>
        <title>Student Document</title>
        <style>
          /* Your CSS styles here */
        </style>
      </head>
      <body>
        <h1>Convocation</h1>
        <div class="student-info">
          <div>
            <span>Id: ${student.id}</span>
          </div>
          <div>
            <span>CNE: ${student.cne}</span>
          </div>
          <div>
            <span>Numero Appoge: ${student.numAppoge}</span>
          </div>
          <div>
            <span>Nom: ${student.firstName}</span>
          </div>
          <div>
            <span>Prenom: ${student.lastName}</span>
          </div>
          <div class="qr-code">
            <canvas id="qr-canvas"></canvas>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
        <script>
          const qrData = \`Appoge: ${student?.numAppoge}\\n CNE: ${student?.cne}\\n First Name: ${student?.firstName}\\n Last Name: ${student?.lastName}\`;
          const canvas = document.getElementById('qr-canvas');
          const qrCode = new QRCode(canvas, {
            text: qrData,
            width: 100,
            height: 100,
          });
          const dataUrl = canvas.toDataURL();
          const img = document.createElement('img');
          img.src = dataUrl;
          document.querySelector('.qr-code').appendChild(img);

          window.onload = function() {
            window.print();
          };
        </script>
      </body>
    </html>
  `);
    printWindow.document.close();
};
