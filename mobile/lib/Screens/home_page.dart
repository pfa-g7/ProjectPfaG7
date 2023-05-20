import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'scanner/scanCode.dart';
import 'scanner/barcode_scanner.dart';
import '../widgets/bottom_navigation_bar_widget.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String? qrResult;
  final user = FirebaseAuth.instance.currentUser;

  Future qrCodeScanner() async {
    String qResult;
    try {
      qResult = await FlutterBarcodeScanner.scanBarcode(
          "#2097F3", "Cancel", true, ScanMode.QR);
    } on PlatformException {
      qResult = "Failed to get Plateform Version";
    }
    if (!mounted) return;
    setState(() {
      qrResult = qResult;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationStateWidget(
        title: "Confirmer la presence",
        onPressed: qrCodeScanner,

        // clickable: _isBtnDisable,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Signed in as , ${user?.email}'),
            MaterialButton(
              onPressed: () {
                FirebaseAuth.instance.signOut();
              },
              color: Colors.deepOrangeAccent,
              child: const Text('Sign Out'),
            ),
            TextButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ScanningWidget()),
                );
              },
              child: const Text(
                'le fichier',
                style: TextStyle(
                  color: Colors.blue,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            TextButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => const BarCodeScanner()),
                );
              },
              child: const Text(
                'scanner le fichier',
                style: TextStyle(
                  color: Colors.blue,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Container(
              margin: const EdgeInsets.only(bottom: 15),
              padding: const EdgeInsets.all(10),
              height: 100,
              decoration: BoxDecoration(
                color: const Color(0xFFF9F9FB),
                borderRadius: BorderRadius.circular(30),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  /***box start */
                  const Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        "07:00",
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      Text(
                        "AM",
                        style: TextStyle(
                            fontWeight: FontWeight.bold, color: Colors.grey),
                      ),
                    ],
                  ),
                  Container(
                    height: 100,
                    width: 1,
                    color: Colors.grey.withOpacity(0.5),
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      SizedBox(
                        width: MediaQuery.of(context).size.width - 160,
                        child: const Text(
                          "The Basic of Typography II",
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                      Row(
                        children: [
                          const Icon(
                            Icons.location_on,
                            color: Colors.grey,
                            size: 20,
                          ),
                          const SizedBox(
                            width: 5,
                          ),
                          SizedBox(
                            width: MediaQuery.of(context).size.width - 160,
                            child: const Text(
                              "Room C1, Faculty of Art & Design Building",
                              overflow: TextOverflow.ellipsis,
                              style:
                                  TextStyle(color: Colors.grey, fontSize: 13),
                            ),
                          )
                        ],
                      ),
                      const Row(
                        children: [
                          CircleAvatar(
                            backgroundImage: NetworkImage(
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"),
                            radius: 10,
                          ),
                          SizedBox(
                            width: 5,
                          ),
                          Text(
                            "Gabriel Sutton",
                            style: TextStyle(color: Colors.grey, fontSize: 13),
                          )
                        ],
                      ),
                    ],
                  )
                  /***box start */
                ],
              ),
            ),
            /*start scan button bar */

            /*end scan button bar */
          ],
        ),
      ),
    );
  }
}
