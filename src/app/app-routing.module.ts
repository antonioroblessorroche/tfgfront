import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WorkoutGuardGuard as guard } from './guards/workout-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/workouts/admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin']}
  },
  {
    path: 'admin-diet',
    loadChildren: () => import('./pages/diet/diet/diet.module').then( m => m.DietPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'admin-classes',
    loadChildren: () => import('./pages/clases/admin-classes/admin-classes.modules').then( m => m.AdminClassesPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'admin-class-master',
    loadChildren: () => import('./pages/class-master/admin-class-master/admin-class-master.module').then( m => m.AdminClassMasterPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'classes',
    loadChildren: () => import('./pages/clases/training-class/training-class.module').then( m => m.TrainingClassPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/workouts/user/user.module').then( m => m.UserPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'new-workout',
    loadChildren: () => import('./pages/workouts/new-workout/new-workout.module').then( m => m.NewWorkoutPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin']}
  },
  {
    path: 'new-class-master',
    loadChildren: () => import('./pages/class-master/new-class-master/new-class-master.module').then( m => m.NewClassMasterPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin']}
  },
  {
    path: 'new-diet',
    loadChildren: () => import('./pages/diet/new-diet/new-diet.module').then( m => m.NewDietPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin']}
  },
  {
    path: 'edit-workout/:id',
    loadChildren: () => import('./pages/workouts/edit-workout/edit-workout.module').then( m => m.EditWorkoutPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin']}
  },
  {
    path: 'edit-class-master/:id',
    loadChildren: () => import('./pages/class-master/edit-class-master/edit-class-master.module').then( m => m.EditClassMasterPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin']}
  },
  {
    path: 'workout-detail/:id',
    loadChildren: () => import('./pages/workouts/workout-detail/workout-detail.module').then( m => m.WorkoutDetailPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'training-class-detail/:id',
    loadChildren: () => import('./pages/clases/training-class-detail/training-class-detail.module').then( m => m.TrainingClassDetailPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'diet-detail/:id',
    loadChildren: () => import('./pages/diet/diet-detail/diet-detail.module').then( m => m.DietDetailPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'class-master-detail/:id',
    loadChildren: () => import('./pages/class-master/detail-class-master/detail-class-master.module').then( m => m.DetailClassMasterPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'session-detail/:id',
    loadChildren: () => import('./pages/workouts/session-detail/session-detail.module').then( m => m.SessionDetailPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'link-workout',
    loadChildren: () => import('./pages/workouts/link-workout/link-workout.module').then( m => m.LinkWorkoutPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin']}
  },  
  {
    path: 'profile/:user',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [guard], data: {requiredRoles: ['user', 'admin']}
  },
  {
    path: 'mis-clases',
    loadChildren: () => import('./pages/clases/my-classes/my-classes.module').then( m => m.ClassPageModule ),
    canActivate: [guard], data: {requiredRoles: ['user']}
  },
  {
    path: 'link-workout',
    loadChildren: () => import('./pages/workouts/link-workout/link-workout.module').then( m => m.LinkWorkoutPageModule)
  },
  {
    path: 'diet-admin',
    loadChildren: () => import('./pages/diet/diet-admin/diet-admin.module').then( m => m.DietAdminPageModule)
  },
  // {
  //   path: 'admin-class-master',
  //   loadChildren: () => import('./admin-class-master/admin-class-master.module').then( m => m.AdminClassMasterPageModule)
  // },
  // {
  //   path: 'admin-class-master',
  //   loadChildren: () => import('./admin-class-master/admin-class-master.module').then( m => m.AdminClassMasterPageModule)
  // },
  {
    path: 'new-class-master',
    loadChildren: () => import('./pages/class-master/new-class-master/new-class-master.module').then( m => m.NewClassMasterPageModule)
  },
  {
    path: 'detail-class-master',
    loadChildren: () => import('./pages/class-master/detail-class-master/detail-class-master.module').then( m => m.DetailClassMasterPageModule)
  },
  {
    path: 'edit-class-master',
    loadChildren: () => import('./pages/class-master/edit-class-master/edit-class-master.module').then( m => m.EditClassMasterPageModule)
  },
  {
    path: 'weekly-classes-master',
    loadChildren: () => import('./pages/weekly-classes/weekly-classes-master/weekly-classes-master.module').then( m => m.WeeklyClassesMasterPageModule)
  },
  {
    path: 'weekly-classes-days/:id',
    loadChildren: () => import('./pages/weekly-classes/weekly-classes-days/weekly-classes-days.module').then( m => m.WeeklyClassesDaysPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'daily-classes-master/:id',
    loadChildren: () => import('./pages/weekly-classes/daily-classes-master/daily-classes-master.module').then( m => m.DailyClassesMasterPageModule)
  },
  {
    path: 'new-daily-class/:id',
    loadChildren: () => import('./pages/weekly-classes/new-daily-class/new-daily-class.module').then( m => m.NewDailyClassPageModule),
    canActivate: [guard], data: {requiredRoles: ['admin', 'user']}
  },
  {
    path: 'detail-daily-class/:id',
    loadChildren: () => import('./pages/weekly-classes/detail-daily-class/detail-daily-class.module').then( m => m.DetailDailyClassPageModule)
  },
  {
    path: 'edit-daily-class/:id/:index',
    loadChildren: () => import('./pages/weekly-classes/edit-daily-class/edit-daily-class.module').then( m => m.EditDailyClassPageModule)
  },
  {
    path: 'new-weekly-classes-master/:id',
    loadChildren: () => import('./pages/weekly-classes/new-weekly-classes-master/new-weekly-classes-master.module').then( m => m.NewWeeklyClassesMasterPageModule)
  },
  {
    path: 'edit-daily-classes-master/:id/:index',
    loadChildren: () => import('./pages/weekly-classes/edit-daily-classes-master/edit-daily-classes-master.module').then( m => m.EditDailyClassesMasterPageModule)
  },
  {
    path: 'new-daily-classes-master/:id',
    loadChildren: () => import('./pages/new-daily-classes-master/new-daily-classes-master.module').then( m => m.NewDailyClassesMasterPageModule)
  },
  {
    path: 'weekly-classes',
    loadChildren: () => import('./pages/clasesSemanales/weekly-classes/weekly-classes.module').then( m => m.WeeklyClassesPageModule)
  },
  {
    path: 'new-weekly-class',
    loadChildren: () => import('./pages/clasesSemanales/new-weekly-class/new-weekly-class.module').then( m => m.NewWeeklyClassPageModule)
  },
  {
    path: 'master-training-centers',
    loadChildren: () => import('./pages/master/master-training-centers/master-training-centers.module').then( m => m.MasterTrainingCentersPageModule)
  },
  {
    path: 'edit-master-training-centers/:id',
    loadChildren: () => import('./pages/master/edit-master-training-centers/edit-master-training-centers.module').then( m => m.EditMasterTrainingCentersPageModule)
  },
  {
    path: 'edit-master-training-centers',
    loadChildren: () => import('./pages/master/edit-master-training-centers/edit-master-training-centers.module').then( m => m.EditMasterTrainingCentersPageModule)
  },
  {
    path: 'edit-weekly-classes/:id',
    loadChildren: () => import('./pages/clasesSemanales/edit-weekly-classes/edit-weekly-classes.module').then( m => m.EditWeeklyClassesPageModule)
  },
  {
    path: 'regular-weekly-classes',
    loadChildren: () => import('./pages/clasesSemanales/regular-weekly-classes/regular-weekly-classes.module').then( m => m.RegularWeeklyClassesPageModule)
  },
  {
    path: 'list-users',
    loadChildren: () => import('./pages/users/list-users/list-users.module').then( m => m.ListUsersPageModule)
  },
  {
    path: 'user-detail/:id',
    loadChildren: () => import('./pages/users/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'fares-list',
    loadChildren: () => import('./pages/fares/fares-list/fares-list.module').then( m => m.FaresListPageModule)
  },
  {
    path: 'edit-fare/:id',
    loadChildren: () => import('./pages/fares/edit-fare/edit-fare.module').then( m => m.EditFarePageModule)
  },
  {
    path: 'expenses-list',
    loadChildren: () => import('./pages/expenses/expenses-list/expenses-list.module').then( m => m.ExpensesListPageModule)
  },
  {
    path: 'detail-expense/:id',
    loadChildren: () => import('./pages/expenses/detail-expense/detail-expense.module').then( m => m.DetailExpensePageModule)
  },
  {
    path: 'new-expense',
    loadChildren: () => import('./pages/expenses/new-expense/new-expense.module').then( m => m.NewExpensePageModule)
  },
  {
    path: 'new-user-payment/:id',
    loadChildren: () => import('./pages/users/new-user-payment/new-user-payment.module').then( m => m.NewUserPaymentPageModule)
  },
  {
    path: 'detail-user-payment/:id',
    loadChildren: () => import('./pages/users/detail-user-payment/detail-user-payment.module').then( m => m.DetailUserPaymentPageModule)
  },
  {
    path: 'list-user-payment',
    loadChildren: () => import('./pages/users/list-user-payment/list-user-payment.module').then( m => m.ListUserPaymentPageModule)
  },
  {
    path: 'create-new-user',
    loadChildren: () => import('./pages/users/create-new-user/create-new-user.module').then( m => m.CreateNewUserPageModule)
  },
  {
    path: 'create-news',
    loadChildren: () => import('./pages/news/create-news/create-news.module').then( m => m.CreateNewsPageModule)
  },
  {
    path: 'list-news',
    loadChildren: () => import('./pages/news/list-news/list-news.module').then( m => m.ListNewsPageModule)
  },
  {
    path: 'search-daily-class',
    loadChildren: () => import('./pages/clasesDiarias/search-daily-class/search-daily-class.module').then( m => m.SearchDailyClassPageModule)
  },
  {
    path: 'detail-daily-class-session/:id/:index',
    loadChildren: () => import('./pages/clasesDiarias/detail-daily-class/detail-daily-class.module').then( m => m.DetailDailyClassPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
