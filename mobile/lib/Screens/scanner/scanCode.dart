import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:mobile/Screens/Welcome/welcome_screen.dart';
// import 'package:flutter_blue/flutter_blue.dart';

class ScanningWidget extends StatefulWidget {
  @override
  _ScanningWidgetState createState() => _ScanningWidgetState();
}

class _ScanningWidgetState extends State<ScanningWidget> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  User? _user;

  @override
  void initState() {
    super.initState();
    // startScan();
  }

  // void startScan() {
  //   final user = _auth.currentUser;

  //   setState(() {
  //     scanResults = user;
  //   });

  //   //   flutterBlue.startScan();
  //   // }

  //   void stopScan() {
  //     flutterBlue.stopScan();
  //   }
  // }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Scan device'),
      ),
      body: Column(
        children: [
          GestureDetector(
            onTap: () {
              showModalBottomSheet(
                context: context,
                builder: (BuildContext context) {
                  return Container(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        ListTile(
                          leading: Icon(Icons.logout),
                          title: Text('Log Out'),
                          onTap: () async {
                            await FirebaseAuth.instance.signOut();
                            Navigator.pop(context);
                            Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                builder: (context) => WelcomeScreen(),
                              ),
                            );
                          },
                        ),
                      ],
                    ),
                  );
                },
              );
            },
            child: Container(
              padding: EdgeInsets.all(16),
              color: Colors.blue,
              child: Row(
                children: [
                  CircleAvatar(
                    child: Text(
                      _user?.email?.substring(0, 1).toUpperCase() ?? '?',
                      style: TextStyle(fontSize: 24),
                    ),
                    radius: 30,
                  ),
                  SizedBox(width: 16),
                  Text(
                    'Hello, ${_user?.email}',
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Exams:',
                      style: TextStyle(fontSize: 24),
                    ),
                    SizedBox(height: 16),
                    DataTable(
                      columns: const [
                        DataColumn(label: Text('Exam')),
                        DataColumn(label: Text('Time')),
                        DataColumn(label: Text('Place')),
                      ],
                      rows: const [
                        DataRow(cells: [
                          DataCell(Text('Analyse 4')),
                          DataCell(Text('08/03/2021\n09H00-10H30')),
                          DataCell(Text('A-7')),
                        ]),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          final data = '${_user?.email}\nExams:\n'
              'Analyse 4: 08/03/2021 09H00-10H30 A-7\n'
              'Analyse 5: 05/03/2021 17H00-18H30 A-7\n'
              'Algèbre 4: 09/03/2021 15H00-16H30 A-7\n'
              'Mécanique du solide: 08/03/2021 11H00-13H00 A-7\n'
              'Electricité 2: 09/03/2021 17H00-18H30 A-7';
          final qrCode = QrImageView(
            data: '1234567890',
            version: QrVersions.auto,
            size: 200.0,
          );
          // Show the QR code in a dialog
          showDialog(
            context: context,
            builder: (BuildContext context) {
              return Dialog(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      qrCode,
                      SizedBox(height: 16.0),
                      ElevatedButton(
                        onPressed: () {
                          Navigator.pop(context);
                        },
                        child: Text('Close'),
                      ),
                    ],
                  ),
                ),
              );
            },
          );
        },
        child: Icon(Icons.qr_code),
      ),
      // floatingActionButton: FloatingActionButton(
      //   onPressed: stopScan,
      //   child: Icon(Icons.stop),
      // ),
    );
  }
}



// class QrScanner extends StatelessWidget {
//   const QrScanner({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: "Qr code Scanner",
//       theme: ThemeData(primarySwatch: Colors.indigo),
//       home: QRCodeWidget(),
//     );
//   }
// }
