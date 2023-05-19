import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'scanner/scanCode.dart';
import 'scanner/barcode_scanner.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final user = FirebaseAuth.instance.currentUser;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
        Text('Signed in as , ${user?.email}'),
        MaterialButton(
          onPressed: () {
            FirebaseAuth.instance.signOut();
          },
          color: Colors.deepOrangeAccent,
          child: Text('sing Out'),
        ),
        TextButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => ScanningWidget()),
            );
          },
          child: Text(
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
              MaterialPageRoute(builder: (context) => BarCodeScanner()),
            );
          },
          child: Text(
            'scanner le fichier',
            style: TextStyle(
              color: Colors.blue,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ])),
    );
  }
}
