<template>
  <div class="quizapp">
    <div class="topProgess">
      <div class="topSECOND" :style="{ width: questionBar + '%' }"></div>
    </div>
    <section>
      <header>
        <h1>Question {{ b }} of {{ questions.length }}</h1>
        <!-- <div v-for="item in questions.slice(a, b)" :key="item"> -->
          <!-- <p v-if="this.isComplete ? '' : item.category"> -->
            <p v-for="item in questions.slice(a, b)" :key="item">
            Category: {{ item.catogory }}
          </p>
        <!-- </div> -->
      </header>
      <hr />
      <!-- <div v-if="scoreshow"> -->
          <h3>your score is :{{score}}/100</h3>
          <h3>your WrongScore is : {{wrongBar}}/100</h3>
        <!-- </div> -->
      <main>
        <div
          v-for="(ques, index) in questions.slice(a, b)"
          :key="index"
          v-show="quiz"

        >
          <h1>{{ ques.question }}</h1>
          <div>
            <ul>
              <li
                v-for="(item, index) in ques.answear"
                :key="index"
                :class="select ? check(item) : ''"
                @click="selectanswear(item)"
              >
                <button>{{ item.option }}</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="result">
          <h2>{{ message }}</h2>
          <button class="btnnext" @click="nextQuestion" v-show="btnNextShow">
            Next Question
          </button>
        </div>
      </main>
    </section>
    <footer>
      <div class="mainbar">
        <div class="secondBar" :style="{ width: maxscore + '%' }"></div>
        <div class="thirdBar" :style="{ width: score + '%' }"></div>
        <div class="firstBAR" :style="{ width: wrongBar + '%' }"></div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questions: "",
      a: 0,
      b: 1,
      quiz: true,
      message: "",
      // scoreShow: false,
      btnNextShow: false,
      gameOver: false,
      wrongBar: 0,
      score: 0,
      maxscore: 100,
      questionBar: 0,
      // isComplete: false,
      catogory: true,
      select: false,
    };
  },
  computed: {},
  created() {
    this.questions = this.$store.getters.getDataFromState;
  },
  methods: {
    check(status) {
      if (status.correct) {
        return "Correct!";
      } else {
        return "Incorrect!";
      }
    },
    questionBarVal() {
      this.questionBar = this.questionBar + 5.5;
      if (this.questionBar > 100) {
        this.questionBar = 100;
        this.gameOver = true;
      }
    },
    wrongeBarVal() {
      this.wrongBar = this.wrongBar + 5.5;
    },
    selectanswear(answear) {
      this.select = true;
      if (answear.correct) {
        this.score = this.score + 5;
        this.message = "correct!";
        this.btnNextShow = true;
      } else {
        this.maxscore = this.maxscore - 5;
        this.message = "Incorrect!";
        this.btnNextShow = true;
        this.wrongBar = this.wrongBar + 5;
      }
    },
    nextQuestion() {
      if (this.questions.length - 1 == this.a) {
        this.scoreShow = true;
        this.quiz = false;
        // this.isComplete = true;
      } else {
        this.a++;
        this.b++;
        this.select = false;
        this.questionBarVal();
        this.message = "";
        this.btnNextShow = false;
      }
    },
  },
};
</script>
<style scoped>
.quizapp {
  margin: 10px auto;
  width: 50%;
  height: 80vh;
  border: 2px solid black;
  text-transform: capitalize;
}
.topProgess {
  margin: 30px auto;
  width: 80%;
  height: 20px;
  border: 1.5px solid black;
}
.topSECOND {
  width: 100%;
  height: 100%;
  background: gray;
}
header {
  width: 500px;
  height: 80px;
  margin: auto;
}
header h1 {
  font-size: 40px;
  font-weight: 800;
  margin: 30px 0 0 0;
  /* text-shadow: 2px 2px rgb(87, 239, 204); */
}
header p {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  /* text-shadow: 1.5px 1.5px rgb(87, 239, 204); */
}
main h1 {
  margin: 100px 0 0 0;
  /* text-shadow: 2px 1.5px rgb(87, 239, 204); */
}
ul {
  list-style-type: none;
  width: 50%;
  display: grid;
  padding-left: 0;
  justify-content: center;
  grid-template-columns: auto auto;
  /* height: 200px; */
  margin: auto;
}
li {
  display: inline-flex;
  flex-direction: column-reverse;
  width: auto;
  margin: 10px;
  text-align: left;
  height: 100px;
}
li button {
  width: auto;
  color: rgb(255, 255, 255);
  background: rgb(65, 94, 237);
  font-size: 15px;
  border-radius: 10px;
  font-weight: 700;
  padding: 5px 10px;
}
li button:hover{
  background: lightblue;
  color: black;
}
.result {
  width: 100%;
  margin-top: 50px;
}
.result h2,
button {
  width: fit-content;
  margin: 10px auto;
}
.result > h2 {
  font-size: 30px;
  text-shadow: 5px 0 0 rgb(159, 138, 138);
}
.result button {
  position: relative;
  width: 150px;
  height: 35px;
  font-size: 15px;
  font-weight: 800;
  color: aliceblue;
  background: rgb(56, 56, 220);
  border: none;
}
.result button:hover {
  background: lightblue;
  color: black;
  /* text-shadow: 4px 4px gray; */
}
footer {
  /* position:static; */
  margin: 50px auto;
  width: 80%;
  height: 20px;
  border: 1.5px solid black;
}
.mainbar {
  position: relative;
  height: 100%;
}
.firstBAR {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
}
.secondBar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: lightgray;
}
.thirdBar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: gray;
}
</style>