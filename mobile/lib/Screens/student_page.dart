import 'dart:developer';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:get/get.dart';
import 'package:mobile/screens/home_page.dart';
import 'package:mobile/utilities/toast_msg.dart';
import 'package:mobile/service/exam_service.dart';
import 'package:mobile/service/user_service.dart';
import 'package:mobile/widgets/loading_indicator.dart';
import 'package:mobile/utilities/color.dart';
import 'package:mobile/utilities/decoration.dart';
import 'package:mobile/utilities/style.dart';
import '../widgets/bottom_navigation_bar_widget.dart';
import 'package:flutter/material.dart';

class StudentPage extends StatefulWidget {
  const StudentPage({Key? key}) : super(key: key);

  @override
  _StudentPageState createState() => _StudentPageState();
}

class _StudentPageState extends State<StudentPage> {
  bool _isLoading = false;
  final String _isBtnDisable = "false";
  String _uId = "";
  String _uName = "";
  String? result = "";
  bool _presence = true;
  String? _module;
  String? _filiere;
  String? _salle;
  int? _table;
  int? examId;
  @override
  void initState() {
    super.initState();
    Map<String, dynamic> arguments = Get.arguments;
    result = arguments['res'];
    _getAndSetStudentData(1904027);
  }

  _getAndSetStudentData(r) async {
    setState(() {
      _isLoading = true;
    });

    final res = await UserService.getData(r);
    setState(() {
      _uId = "${res?.id}";
      _uName = "${res?.firstName} ${res?.lastName}";
    });

    final exam = await ExamService.getData(_uId);
    setState(() {
      _module = exam[0].module?.libelle;
      _filiere = exam[0].module?.filiere?.libelle;
      _salle = "${exam[0].salle}";
      _table = exam[0].numTable;
      _presence = exam[0].presence!;
      examId = exam[0].id;
    });
    setState(() {
      log("end");

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
            style: kCardSubTitleStyle,
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
          title: _presence ? "Confirmer la presence" : "Annuler la presence",
          onPressed: () {
            setState(() {
              _presence = !_presence;
            });
            _updateBookedSlot(examId);
          },
          clickable: _isBtnDisable,
        ),
        body: _isLoading
            ? const LoadingIndicatorWidget()
            : Stack(
                clipBehavior: Clip.none,
                children: <Widget>[
                  Positioned(
                    top: 0,
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
            const SizedBox(height: 23),
            Text("Numéro de l'Appoge : $result", style: kCardSubTitleStyle),
            const SizedBox(height: 23),
            Text("Nom de module : $_module", style: kCardSubTitleStyle),
            const SizedBox(height: 23),
            Text("Nom de filiere : $_filiere", style: kCardSubTitleStyle),
            const SizedBox(height: 23),
            Text("Num de salle : $_salle", style: kCardSubTitleStyle),
            const SizedBox(height: 23),
            Text("Num de table : $_table", style: kCardSubTitleStyle),
            const SizedBox(height: 23),
          ],
        ),
      ),
    );
  }

  void _updateBookedSlot(id) async {
    setState(() {
      _isLoading = true;
    });

    //initialize all values
    final insertStatus = await ExamService.updateData(id, _presence);
    log("ere");

    if (insertStatus != "error") {
      ToastMsg.showToastMsg("Enregister avec succès");
      setState(() {
        _isLoading = false;
      });
      Get.to(() => const HomePage());
    } else {
      ToastMsg.showToastMsg("Quelque chose s'est mal passé. Essayez à nouveau");
      // Navigator.pop(context);
    }
  }
}
