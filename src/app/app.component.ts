import { Component } from '@angular/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jokemaster';
  joke: any = "Write a topic for a joke";
  jokeLoading = false;
  questionAutofilled: any = "";
  question: any = "";
  form: FormGroup;
  jokeInput = { textfield: "" };


  constructor(builder: FormBuilder) {
    this.form = builder.group({
      jokeInputfield: ""
    });
  }

  ngOnInit() {

  }

  async loadJoke() {
    this.clearJoke();
    this.jokeIsLoading();


    const response = fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: "call me a joke about: " + this.jokeInput.textfield
        // prompt: data.get('prompt')
      })
    })


    const data = (await (await response).json());
    // const parsedData = data.bot.trim() // trims any trailing spaces/'\n'
    this.joke = data.bot


    this.jokeIsNotLoading();
    this.clearJokeInputField();
  }


  clearJoke(){
    this.joke = ""
  }

  jokeIsLoading(){
    this.jokeLoading = true
  }

  jokeIsNotLoading(){
    this.jokeLoading = false
  }

  clearJokeInputField(){
    this.jokeInput.textfield = ""
  }

}
