// import { useTranslation } from "react-i18next";

// import "./contact.css"
// const Contact = () => {
//   const { t, i18n } = useTranslation();
//   return (
//     <div className="bg-slate-300  mt-20 flex flex-col items-center  gap-2">
//       <h1>{t("Contact")}</h1>
//       <div class="container">
//         <div class="item">
//           <div class="quote">
//             <p>
//               I am Groot.<span>Groot</span>
//             </p>
//           </div>
//         </div>
//         <div class="item">
//           <div class="quote">
//             <p>
//               You'r the head of security and your password is 'password'&nbsp;?
//               <span>Peter Parker</span>
//             </p>
//           </div>
//         </div>
//         <div class="item">
//           <div class="quote">
//             <p>
//               That really is America's ass.<span>Captain America</span>
//             </p>
//           </div>
//         </div>
//         <div class="item">
//           <div class="quote">
//             <p>
//               The hardest choices require the strongest wills.
//               <span>Thanos</span>
//             </p>
//           </div>
//         </div>
//         <div class="item">
//           <div class="quote">
//             <p>
//               Genius, billionaire, playboy, philanthropist.
//               <span>Tony Stark</span>
//             </p>
//           </div>
//         </div>
//         <div class="item">
//           <div class="quote">
//             <p>
//               We never lose our demons. We only learn to live above them.
//               <span>Ancient One</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { useTranslation } from "react-i18next";

// import "./contact.css";
import Btn from "../../components/Btn";
const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
<div>
  <Btn/>
</div>
  );
};

export default Contact;
