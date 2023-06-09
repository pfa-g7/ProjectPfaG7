class UserModel {
  int? id;
  String? username;
  String? password;
  String? email;
  String? firstName;
  String? lastName;
  String? cin;
  String? role;
  int? numAppoge;
  String? cne;

  UserModel(
      {this.id,
      this.username,
      this.password,
      this.email,
      this.firstName,
      this.lastName,
      this.cin,
      this.role,
      this.numAppoge,
      this.cne});

  UserModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    username = json['username'];
    password = json['password'];
    email = json['email'];
    firstName = json['firstName'];
    lastName = json['lastName'];
    cin = json['cin'];
    role = json['role'];
    numAppoge = json['numAppoge'];
    cne = json['cne'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['username'] = username;
    data['password'] = password;
    data['email'] = email;
    data['firstName'] = firstName;
    data['lastName'] = lastName;
    data['cin'] = cin;
    data['role'] = role;
    data['numAppoge'] = numAppoge;
    data['cne'] = cne;
    return data;
  }
}
