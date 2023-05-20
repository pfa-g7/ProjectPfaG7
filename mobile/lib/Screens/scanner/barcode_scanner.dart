import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';

class BarCodeScanner extends StatefulWidget {
  const BarCodeScanner({Key? key}) : super(key: key);

  @override
  State<BarCodeScanner> createState() => _BarCodeScannerState();
}

class _BarCodeScannerState extends State<BarCodeScanner> {
  String? barResult;

  String? qrResult;

  Future barCodeScanner() async {
    String result;

    try {
      result = await FlutterBarcodeScanner.scanBarcode(
          "#2097F3", "Cancel", true, ScanMode.BARCODE);
    } on PlatformException {
      result = "Failed to get plateform version";
    }
    if (!mounted) return;
    setState(() {
      barResult = result;
    });
  }

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
      appBar: AppBar(
        backgroundColor: Colors.blue,
        centerTitle: true,
        title: const Text(
          "QR Code Scanner",
          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),
        ),
      ),
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 100),
                child: MaterialButton(
                    onPressed: qrCodeScanner,
                    color: Colors.blue,
                    shape: const StadiumBorder(),
                    child: const Row(
                      children: [
                        Icon(
                          Icons.camera,
                          color: Colors.black,
                        ),
                        SizedBox(width: 5.0),
                        Text(
                          "Scan QR Code",
                          style: TextStyle(
                              color: Colors.black, fontWeight: FontWeight.bold),
                        ),
                      ],
                    )),
              ),
              const SizedBox(
                height: 20,
              ),
              Text(
                qrResult == null ? "Scan QR Code" : "Result :   $qrResult",
                style: const TextStyle(
                    color: Colors.black, fontWeight: FontWeight.bold),
              )
            ],
          ),
        ),
      ),
    );
  }
}
