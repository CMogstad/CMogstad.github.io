<script>
import imgB3Logo from "../images/RunTime/logo.jpg";
import imgResume from "../images/ResumeImages/Resume.jpg";
import imgProjects from "../images/ResumeImages/Projects.jpg";
import imgAboutMe from "../images/ResumeImages/AboutMe.jpg";
import imgTetrisGameplay from "../images/TetrisImages/gameplay.jpg";
import imgeTetrisPausedGame from "../images/TetrisImages/pausedgame.jpg";
import imgTetrisGameOver from "../images/TetrisImages/gameover.jpg";
import imgAsteroidsGameplay from "../images/AsteroidsImages/gameplay.jpg";
import imgAsteroidsGameOver from "../images/AsteroidsImages/gameover.jpg";
import imgRecipeHomepage from "../images/RecipeWesiteImages/homepage.jpg";
import imgRecipepage from "../images/RecipeWesiteImages/recipepage_recipe.jpg";
import imgRecipeRating from "../images/RecipeWesiteImages/recipepage_rating_comments.jpg";
import imgWeeklyMenuPopularDishes from "../images/WeeklyMenuImages/menuPopularDishes.jpg";
import imgWeeklyMenuRandomDishes from "../images/WeeklyMenuImages/menuRandomDishes.jpg";
import imgWeeklyMenuDishes from "../images/WeeklyMenuImages/listOfDishes.jpg";
import imgWeeklyMenuEditDish from "../images/WeeklyMenuImages/editDish.jpg";
import imgWeeklyMenuEditIngredient from "../images/WeeklyMenuImages/editIngredient.jpg";
import imgSchoolManagementMainMenu from "../images/SchoolManagementImages/mainmenu.jpg";
import imgSchoolManagementStudentMenu from "../images/SchoolManagementImages/studentmenu.jpg";
import imgSchoolManagementAddStudent from "../images/SchoolManagementImages/addstudent.jpg";
import imgSchoolManagementStudents from "../images/SchoolManagementImages/allstudents.jpg";

const imgMap = [
  ["B3Logo", imgB3Logo],
  ["Resume", imgResume],
  ["Projects", imgProjects],
  ["AboutMe", imgAboutMe],
  ["TetrisGameplay", imgTetrisGameplay],
  ["TetrisPausedGame", imgeTetrisPausedGame],
  ["TetrisGameOver", imgTetrisGameOver],
  ["AsteroidsGameplay", imgAsteroidsGameplay],
  ["AsteroidsGameOver", imgAsteroidsGameOver],
  ["RecipeHomepage", imgRecipeHomepage],
  ["Recipepage", imgRecipepage],
  ["RecipeRating", imgRecipeRating],
  ["WeeklyMenuPopularDishes", imgWeeklyMenuPopularDishes],
  ["WeeklyMenuRandomDishes", imgWeeklyMenuRandomDishes],
  ["WeeklyMenuDishes", imgWeeklyMenuDishes],
  ["WeeklyMenuEditDish", imgWeeklyMenuEditDish],
  ["WeeklyMenuEditIngredient", imgWeeklyMenuEditIngredient],
  ["SchoolManagementMainMenu", imgSchoolManagementMainMenu],
  ["SchoolManagementStudentMenu", imgSchoolManagementStudentMenu],
  ["SchoolManagementAddStudent", imgSchoolManagementAddStudent],
  ["SchoolManagementAddStudent", imgSchoolManagementAddStudent],
];

export function getImageFromName(name) {
  for (let i = 0; i < imgMap.length; i++) {
    if (imgMap[i][0] == name) {
      return imgMap[i][1];
    }
  }
  return null;
}
</script>
