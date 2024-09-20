import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUs from '@/views/ContactUs.vue'
import SalesDashboard from '@/views/pages/dashboard/SalesDashboard.vue'
import AccountDashboard from '@/views/pages/dashboard/AccountDashboard.vue'
import Loanactive from '@/views/pages/loanactive/CreateLoanactive.vue'
import Loanapplicant from '@/views/pages/loanapplicant/CreateLoanapplicant.vue'
import Deposit from '@/views/pages/deposit/CreateDeposit.vue'
import OptionsAPI from '@/components/Lesson/OptionsAPI.vue'
import CompositionAPI from '@/components/Lesson/CompositionAPI.vue'
import WebAPi from '@/components/Lesson/WebApi.vue'



import ProductDetails from '@/components/Lesson/Product/ProductDetails.vue'
import EditProduct from '@/components/Lesson/Product/EditProduct.vue'
import DeleteProduct from '@/components/Lesson/Product/DeleteProduct.vue'
import CreateProduct from '@/components/Lesson/Product/CreateProduct.vue'
import Products from '@/components/Lesson/Product/Products.vue'

import MemberDetails from '@/components/Lesson/Member/MemberDetails.vue'
import EditMember from '@/components/Lesson/Member/EditMember.vue'
import DeleteMember from '@/components/Lesson/Member/DeleteMember.vue'
import CreateMember from '@/components/Lesson/Member/CreateMember.vue'
import Members from '@/components/Lesson/Member/Members.vue'

import LoanapplicantDetails from '@/components/Lesson/Loanapplicant/LoanapplicantDetails.vue'
import EditLoanapplicant from '@/components/Lesson/Loanapplicant/EditLoanapplicant.vue'
import DeleteLoanapplicant from '@/components/Lesson/Loanapplicant/DeleteLoanapplicant.vue'
import CreateLoanapplicant from '@/components/Lesson/Loanapplicant/CreateLoanapplicant.vue'
import Loanapplicants from '@/components/Lesson/Loanapplicant/Loanapplicants.vue'

import WithdrawDetails from '@/components/Lesson/Withdraw/WithdrawDetails.vue'
import EditWithdraw from '@/components/Lesson/Withdraw/EditWithdraw.vue'
import DeleteWithdraw from '@/components/Lesson/Withdraw/DeleteWithdraw.vue'
import CreateWithdraw from '@/components/Lesson/Withdraw/CreateWithdraw.vue'
import Withdraws from '@/components/Lesson/Withdraw/Withdraws.vue'


import DipositDetails from '@/components/Lesson/Diposit/DipositDetails.vue'
import EditDiposit from '@/components/Lesson/Diposit/EditDiposit.vue'
import DeleteDiposit from '@/components/Lesson/Diposit/DeleteDiposit.vue'
import CreateDiposit from '@/components/Lesson/Diposit/CreateDiposit.vue'
import Diposits from '@/components/Lesson/Diposit/Diposits.vue'


import LoanactiveDetails from '@/components/Lesson/Loanactive/LoanactiveDetails.vue'
import EditLoanactive from '@/components/Lesson/Loanactive/EditLoanactive.vue'
import DeleteLoanactive from '@/components/Lesson/Loanactive/DeleteLoanactive.vue'
import CreateLoanactive from '@/components/Lesson/Loanactive/CreateLoanactive.vue'
import Loanactives from '@/components/Lesson/Loanactive/Loanactives.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: AccountDashboard },
    { path:'/contact', name:'contact', component:ContactUs },     
    { path:'/sales-dashboard', name:'sales dashboard', component:SalesDashboard}, 
    { path:'/account-dashboard',name:'account dashboard', component:AccountDashboard },
    { path:'/create-loanactive',name:'loanactive', component:Loanactive },
    { path:'/create-loanapplicant',name:'loanapplicant', component:Loanapplicant },
    { path:'/create-deposit',name:'deposit', component:Deposit },

    //---Product Route----//
    { path:'/products',name:'Products', component:Products },
    { path:'/products/edit/:id', name:'EditProduct', component:EditProduct },
    { path:'/products/delete/:id', name:'DeleteProduct', component:DeleteProduct },
    { path:'/products/details/:id', name:'ProductDetails', component:ProductDetails },
    { path:'/products/create', name:'CreateProduct', component:CreateProduct },
    
    { path:'/members',name:'Members', component:Members },
    { path:'/members/edit/:id', name:'EditMember', component:EditMember },
    { path:'/members/delete/:id', name:'DeleteMember', component:DeleteMember },
    { path:'/members/details/:id', name:'MemberDetails', component:MemberDetails },
    { path:'/members/create', name:'CreateMember', component:CreateMember },

    { path:'/loanapplicants',name:'Loanapplicants', component:Loanapplicants },
    { path:'/loanapplicants/edit/:id', name:'EditLoanapplicant', component:EditLoanapplicant },
    { path:'/loanapplicants/delete/:id', name:'DeleteLoanapplicant', component:DeleteLoanapplicant },
    { path:'/loanapplicants/details/:id', name:'LoanapplicantDetails', component:LoanapplicantDetails },
    { path:'/loanapplicants/create', name:'CreateLoanapplicant', component:CreateLoanapplicant },

    { path:'/withdraws',name:'Withdraws', component:Withdraws },
    { path:'/withdraws/edit/:id', name:'EditWithdraw', component:EditWithdraw },
    { path:'/withdraws/delete/:id', name:'DeleteWithdraw', component:DeleteWithdraw },
    { path:'/withdraws/details/:id', name:'WithdrawDetails', component:WithdrawDetails },
    { path:'/withdraws/create', name:'CreateWithdraw', component:CreateWithdraw },

    { path:'/diposits',name:'Diposits', component:Diposits },
    { path:'/diposits/edit/:id', name:'EditDiposit', component:EditDiposit },
    { path:'/diposits/delete/:id', name:'DeleteDiposit', component:DeleteDiposit },
    { path:'/diposits/details/:id', name:'DipositDetails', component:DipositDetails },
    { path:'/diposits/create', name:'CreateDiposit', component:CreateDiposit },
    

    { path:'/loanactives',name:'Loanactives', component:Loanactives },
    { path:'/loanactives/edit/:id', name:'EditLoanactive', component:EditLoanactive },
    { path:'/loanactives/delete/:id', name:'DeleteLoanactive', component:DeleteLoanactive },
    { path:'/loanactives/details/:id', name:'LoanactiveDetails', component:LoanactiveDetails },
    { path:'/loanactives/create', name:'CreateLoanactive', component:CreateLoanactive },
    

    { path:'/options-api', name:'options API',  component:OptionsAPI  },
    { path:'/composition-api', name:'composition API',  component:CompositionAPI },
    { path:'/web-api', name:'web API', component:WebAPi},
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
  ]
})

export default router
