import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
  interpolation: ["{{", "}}"],
})
export class CardComponent implements OnInit {
  title = "Vazgenchik Blbulyan";
  public num: number = 22;
  private num1: number = 11;
  arr = ["Barev", "angular", "vatik@", "ches"];
  obj = { name: "Jordan", lname: "Peterson", title: "12 rules life" };

  url =
    `https://vignette.wikia.nocookie.net/vedmak/images/e/e2/Ouroboros.svg.png/revision/latest?cb=20160414085122`;
  boolDis: boolean = false;
  //Hook
  ngOnInit() {
    console.log("load 3");
    setTimeout(() => {
      this.url =
        `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png`;
      this.boolDis = true;
    }, 2000);
  }

  info(): string {
    return `Hello Angular method`;
  }

  changeTitle() {
    this.title = "Text changes";
    console.log(this.title);
  }

  inputHandler(val) {
    // const val = ev.target.value;
    this.title = val;
  }

  chHandler() {
    console.log(this.title);
  }
}
