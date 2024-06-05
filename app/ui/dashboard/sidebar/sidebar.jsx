import styles from "./sidebar.module.css"
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttackMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
}  from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path :"/dashboard/users",
        icon : <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag /> ,
      },
      {
        title: "Transactions"
      }
    ]
  }
]

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>SiVena</h1>
      </div>
    </div>
  )
}

export default Sidebar