import 'dart:developer';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:mobile/model/exam.dart';
import 'package:mobile/service/exam_service.dart';
import 'package:mobile/service/user_service.dart';
import 'package:mobile/widgets/loading_indicator.dart';
import 'package:mobile/utilities/color.dart';
import 'package:mobile/utilities/decoration.dart';
import 'package:mobile/utilities/style.dart';
import '../widgets/bottom_navigation_bar_widget.dart';
import 'package:mobile/utilities/toast_msg.dart';
import 'package:flutter/material.dart';

class StudentPage extends StatefulWidget {
  const StudentPage({Key? key}) : super(key: key);

  @override
  _StudentPageState createState() => _StudentPageState();
}

class _StudentPageState extends State<StudentPage> {
  bool _isLoading = false;
  String _isBtnDisable = "false";
  String _uId = "";
  String _uName = "";
  String? result = "";
  int? _presence;
  int? _module;
  String? _salle;
  int? _table;
  int? examId;
  @override
  void initState() {
    super.initState();
    Map<String, dynamic> arguments = Get.arguments;
    result = arguments['res'];
    log("hhhhhhhhh + $result");
    _getAndSetStudentData(1904027);
  }

  _getAndSetStudentData(r) async {
    setState(() {
      _isLoading = true;
    });

    final res = await UserService.getData(
        r); //fetch admin fcm id for sending messages to admin
    setState(() {
      _uId = "${res[0].id}";
      _uName = "${res[0].firstName} ${res[0].lastName}";
    });
    // final exam = await ExamService.getData(_uId);
    // setState(() {
    //   _module = exam[0].module;
    //   _salle = "${exam[0].numSalle}";
    //   _table = exam[0].numTable;
    //   _presence = exam[0].presence;
    //   examId = exam[0].id;
    // });
    setState(() {
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.deepOrangeAccent,
          centerTitle: true,
          title: const Text(
            "Student info",
            style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),
          ),
          actions: [
            IconButton(
              icon: const Icon(Icons.logout),
              onPressed: () {
                FirebaseAuth.instance.signOut();
              },
            ),
          ],
        ),
        bottomNavigationBar: BottomNavigationStateWidget(
          title: "Confirmer la presence",
          onPressed: () {
            _updateBookedSlot(
                examId); // Method handles all the booking system operation.
          },
          clickable: _isBtnDisable,
        ),
        body: _isLoading
            ? Text(_uName)
            // const LoadingIndicatorWidget()
            : Stack(
                clipBehavior: Clip.none,
                children: <Widget>[
                  Positioned(
                    top: 90,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    child: Container(
                      height: MediaQuery.of(context).size.height,
                      decoration: IBoxDecoration.upperBoxDecoration(),
                      child: SingleChildScrollView(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: <Widget>[
                            Padding(
                                padding: const EdgeInsets.only(
                                    top: 20.0, left: 10, right: 10),
                                child: _isLoading
                                    ? const Center(
                                        child: LoadingIndicatorWidget())
                                    : Center(
                                        child: SizedBox(
                                            height: 500,
                                            width: double.infinity,
                                            child: _cardView()),
                                      )),
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ));
  }

  Widget _cardView() {
    return Card(
      color: Colors.grey[300],
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10.0),
      ),
      elevation: 20,
      child: Padding(
        padding: const EdgeInsets.all(18.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Container(
              height: 50,
              width: double.infinity,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                color: appBarColor,
              ),
              child: const Center(
                child: Text(
                  "Veuillez confirmer tous les détails",
                  style: TextStyle(
                    fontFamily: 'OpenSans-SemiBold',
                    color: Colors.white,
                    fontSize: 13,
                  ),
                ),
              ),
            ),
            const Divider(),
            Text("Nom du etudiant : $_uName", style: kCardSubTitleStyle),
            const SizedBox(height: 17),
            Text("Numéro de l'Appoge : $result", style: kCardSubTitleStyle),
            const SizedBox(height: 17),
            Text("Nom de module : $_module", style: kCardSubTitleStyle),
            const SizedBox(height: 17),
            Text("Num de salle : $_salle", style: kCardSubTitleStyle),
            const SizedBox(height: 17),
            Text("Num de table : $_table", style: kCardSubTitleStyle),
            const SizedBox(height: 17),
          ],
        ),
      ),
    );
  }

  void _updateBookedSlot(id) async {
    setState(() {
      _isLoading = true;
    });

    DateTime now = DateTime.now();
    String createdTime = DateFormat('yyyy-MM-dd hh:mm').format(now);

    final exam = ExamModel(
        presence: 0,
        numTable: _table,
        numSalle: _salle,
        student: int.parse(_uId),
        module: _module); //initialize all values

    final insertStatus = await ExamService.updateData(id, exam);

    if (insertStatus != "error") {
      ToastMsg.showToastMsg("Enregister avec succès");
      Get.offAllNamed('/HomePage');
    } else {
      ToastMsg.showToastMsg("Quelque chose s'est mal passé. Essayez à nouveau");
      Navigator.pop(context);
    }

    setState(() {
      _isLoading = false;
      _isBtnDisable = "false";
    });
  }

  void _setStudentPresent() async {
    //loading if data till data fetched
    setState(() {
      _isLoading = true;
    });
    // final res = await AdminProfileService
    //     .getData(); //fetch admin fcm id for sending messages to admin
    // if (res != null) {
    //   setState(() {
    //     _adminFCMid = res[0].fcmId;
    //   });
    // }
    setState(() {
      _isLoading = false;
    });
  }
}
