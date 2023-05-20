// // import 'package:patient/Service/Firebase/readData.dart';
// import 'package:get/get.dart';
// import 'package:mobile/utilities/color.dart';
// import 'package:mobile/utilities/style.dart';
// import 'package:flutter/material.dart';

// // ignore: must_be_immutable
// class CAppBarWidget extends StatefulWidget {

//   final String? title;
//   bool isConn;
  
//   CAppBarWidget({Key? key, this.title}) : super(key: key);

//   @override
//   State<CAppBarWidget> createState() => _CAppBarWidgetState();
// }

// class _CAppBarWidgetState extends State<CAppBarWidget> {
//   @override
//   Widget build(BuildContext context) {
//     return AppBar(
//       iconTheme: const IconThemeData(color: appBarIconColor //change your color here
//           ),
//       title: Text(
//         widget.title,
//         style: kAppbarTitleStyle,
//       ),
//       centerTitle: true,
//       backgroundColor: appBarColor,
//       actions: 
//       <Widget>[ 
//         if(widget.isConn)
//           FutureBuilder(
//             builder: (context, snapshot) {
//               return !snapshot.hasData
//                   ? Container()
//                   : IconButton(
//                       icon: Stack(
//                         children: [
//                           const Icon(
//                             Icons.notifications,
//                             color: Colors.white,
//                           ),
//                           snapshot.data[0].isAnyNotification=="1"
//                               ? const Positioned(
//                                   top: 0,
//                                   right: 0,
//                                   child: CircleAvatar(
//                                     backgroundColor: Colors.red,
//                                     radius: 5,
//                                   ),
//                                 )
//                               : Positioned(top: 0, right: 0, child: Container())
//                         ],
//                       ),
//                       onPressed: () {
//                         Navigator.pushNamed(
//                           context,
//                           "/NotificationPage",
//                         );
//                       }
//                       //

//                       );
//             })
//         else
//         TextButton(
//         onPressed: () {
//           Get.toNamed("/AuthScreen",arguments: false);
//         },
//         child: const Text("Seconnecter", style: TextStyle(color: Colors.white,),),
        
//       ),
            
//       ],
//     );
//   }
// }