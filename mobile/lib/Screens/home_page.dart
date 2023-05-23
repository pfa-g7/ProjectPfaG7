import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:date_picker_timeline/date_picker_timeline.dart';
import 'package:get/get.dart';
import 'package:mobile/model/exam.dart';
import 'package:mobile/service/exam_service.dart';
import 'package:mobile/widgets/loading_indicator.dart';
import 'package:mobile/widgets/bottom_navigation_bar_widget.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final ScrollController _scrollController = ScrollController();
  bool _isLoading = false;

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  String? qrResult;
  var _selectedDate;
  List<String> heure = [];
  List<String> module = [];
  List<String> salle = [];
  List<ExamModel> exam = [];

  final user = FirebaseAuth.instance.currentUser;

  _reCallMethodes(date) async {
    setState(() {
      _isLoading = true;
    });

    final exams = await ExamService.getDataByDate(date);
    setState(() {
      exam = exams;
    });
    // _getAndsetTimeSlots(
    //     _openingTimeHour, _openingTimeMin, _closingTimeHour, _closingTimeMin);
    setState(() {
      _isLoading = false;
    });
  }

  // String email = "${user?.email}";

  Future qrCodeScanner() async {
    // String? qResult;
    // try {
    //   qResult = await FlutterBarcodeScanner.scanBarcode(
    //       "#2097F3", "Cancel", true, ScanMode.QR);
    // } on PlatformException {
    //   qResult = "Failed to get Plateform Version";
    // }
    // if (!mounted) return;

    // setState(() {
    //   _qrResult = qResult;
    // });
    Get.toNamed(
      "/StudentPage",
      arguments: {'res': "1904027"},
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.deepOrangeAccent,
        centerTitle: true,
        title: const Text(
          "Home",
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
        onPressed: qrCodeScanner,

        // clickable: _isBtnDisable,
      ),
      body: _isLoading
          ? const LoadingIndicatorWidget()
          : Stack(
              clipBehavior: Clip.none,
              children: <Widget>[
                Container(
                  decoration: const BoxDecoration(
                      color: Color(0xFFD4E7FE),
                      gradient: LinearGradient(
                          colors: [
                            Color(0xFFF0F0F0),
                            Color(0xFFF0F0F0),
                          ],
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          stops: [0.6, 0.3])),
                  padding:
                      const EdgeInsets.symmetric(horizontal: 10, vertical: 20),
                  child: Column(
                    children: [
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const SizedBox(
                            width: 20,
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "Hi, ${user?.email}",
                                style: const TextStyle(
                                  fontSize: 19,
                                  fontWeight: FontWeight.w900,
                                  color: Color.fromARGB(255, 161, 161, 161),
                                ),
                              ),
                            ],
                          )
                        ],
                      )
                    ],
                  ),
                ),
                Center(
                  child: Column(
                    // mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        decoration: const BoxDecoration(
                            color: Color(0xFFD4E7FE),
                            gradient: LinearGradient(
                                colors: [
                                  Color(0xFFF0F0F0),
                                  Color(0xFFF0F0F0),
                                ],
                                begin: Alignment.topCenter,
                                end: Alignment.bottomCenter,
                                stops: [0.6, 0.3])),
                        padding: const EdgeInsets.symmetric(
                            horizontal: 10, vertical: 20),
                        child: Column(
                          children: [
                            Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const SizedBox(
                                  width: 20,
                                ),
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      "Hi, ${user?.email}",
                                      style: const TextStyle(
                                        fontSize: 19,
                                        fontWeight: FontWeight.w900,
                                        color:
                                            Color.fromARGB(255, 161, 161, 161),
                                      ),
                                    ),
                                  ],
                                )
                              ],
                            )
                          ],
                        ),
                      ),
                      _buildCalendar(),
                      const Divider(),
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
                            Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: const [
                                Text(
                                  "08:00",
                                  style: TextStyle(fontWeight: FontWeight.bold),
                                ),
                                Text(
                                  "AM",
                                  style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Colors.grey),
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
                                  width:
                                      MediaQuery.of(context).size.width - 160,
                                  child: const Text(
                                    "Module 1",
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                ),
                                GestureDetector(
                                  onTap: () {
                                    // Navigator.push(
                                    //   context,
                                    //   MaterialPageRoute(
                                    //     builder: (context) => ScanningWidget(),
                                    //   ),
                                    // );
                                  },
                                  child: Row(
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
                                        width:
                                            MediaQuery.of(context).size.width -
                                                160,
                                        child: const Text(
                                          "salle 7",
                                          overflow: TextOverflow.ellipsis,
                                          style: TextStyle(
                                              color: Colors.grey, fontSize: 13),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                GestureDetector(
                                  onTap: () {
                                    // Action à effectuer lorsque la deuxième Row est cliquée
                                  },
                                  child: Row(
                                    children: const [
                                      CircleAvatar(
                                        backgroundImage: NetworkImage(
                                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
                                        ),
                                        radius: 10,
                                      ),
                                      SizedBox(
                                        width: 5,
                                      ),
                                      Text(
                                        "etage 2",
                                        style: TextStyle(
                                            color: Colors.grey, fontSize: 13),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),

                            /***box start */
                          ],
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
                            Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: const [
                                Text(
                                  "10:00",
                                  style: TextStyle(fontWeight: FontWeight.bold),
                                ),
                                Text(
                                  "AM",
                                  style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Colors.grey),
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
                                  width:
                                      MediaQuery.of(context).size.width - 160,
                                  child: const Text(
                                    "Module 1",
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                ),
                                GestureDetector(
                                  onTap: () {
                                    // Navigator.push(
                                    //   context,
                                    //   MaterialPageRoute(
                                    //     builder: (context) => ScanningWidget(),
                                    //   ),
                                    // );
                                  },
                                  child: Row(
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
                                        width:
                                            MediaQuery.of(context).size.width -
                                                160,
                                        child: const Text(
                                          "salle 7",
                                          overflow: TextOverflow.ellipsis,
                                          style: TextStyle(
                                              color: Colors.grey, fontSize: 13),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                GestureDetector(
                                  onTap: () {
                                    // Action à effectuer lorsque la deuxième Row est cliquée
                                  },
                                  child: Row(
                                    children: const [
                                      CircleAvatar(
                                        backgroundImage: NetworkImage(
                                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
                                        ),
                                        radius: 10,
                                      ),
                                      SizedBox(
                                        width: 5,
                                      ),
                                      Text(
                                        "etage 5",
                                        style: TextStyle(
                                            color: Colors.grey, fontSize: 13),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),

                            /***box start */
                          ],
                        ),
                      ),
                      /*start scan button bar */

                      /*end scan button bar */
                    ],
                  ),
                )
                // _buildCalendar(),
                // const Divider(),

                // Container(
                //   height: MediaQuery.of(context).size.height,
                //   decoration: IBoxDecoration.upperBoxDecoration(),
                //   child: FutureBuilder(
                //       future: ExamService.getDataByDate(_selectedDate),
                //       builder: (context, snapshot) {
                //         if (snapshot.hasData) {
                //           return snapshot.data?.length == 0
                //               ? const NoDataWidget()
                //               : Padding(
                //                   padding: const EdgeInsets.only(
                //                       top: 0.0, left: 8, right: 8),
                //                   child: _buildCard(snapshot.data));
                //         } else if (snapshot.hasError) {
                //           return const NoDataWidget();
                //         } else {
                //           return const LoadingIndicatorWidget();
                //         }
                //       }),
                // ),
              ],
            ),
    );
  }

  Widget _buildCard(e) {
    return ListView.builder(
        controller: _scrollController,
        itemCount: e.length,
        itemBuilder: (context, index) {
          return Container(
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
                Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: const [
                    Text(
                      "01:00",
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    Text(
                      "PM",
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
                        "Module 2",
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    GestureDetector(
                      onTap: () {
                        // Navigator.push(
                        //   context,
                        //   MaterialPageRoute(
                        //     builder: (context) => ScanningWidget(),
                        //   ),
                        // );
                      },
                      child: Row(
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
                              "salle 8",
                              overflow: TextOverflow.ellipsis,
                              style:
                                  TextStyle(color: Colors.grey, fontSize: 13),
                            ),
                          ),
                        ],
                      ),
                    ),
                    GestureDetector(
                      onTap: () {
                        // Action à effectuer lorsque la deuxième Row est cliquée
                      },
                      child: Row(
                        children: const [
                          CircleAvatar(
                            backgroundImage: NetworkImage(
                              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
                            ),
                            radius: 10,
                          ),
                          SizedBox(
                            width: 5,
                          ),
                          Text(
                            "etage 2",
                            style: TextStyle(color: Colors.grey, fontSize: 13),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),

                /***box start */
              ],
            ),
          );
        });
  }

  Widget _buildCalendar() {
    return DatePicker(
      DateTime.now(),
      initialSelectedDate: DateTime.now(),
      selectionColor: Colors.deepOrangeAccent,
      selectedTextColor: Colors.white,
      daysCount: 7,
      onDateChange: (date) {
        setState(() {
          final dateParse = DateTime.parse(date.toString());
          _selectedDate =
              "${dateParse.year}-${dateParse.month}-${dateParse.day}";

          // _reCallMethodes(_selectedDate);
        });
      },
    );
  }
}
