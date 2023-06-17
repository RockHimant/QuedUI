import React, { createContext } from "react"
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import Pool from "UserPool";
import ResetPassword from "./ResetPassword";
import { useNavigate } from "react-router-dom";

const AccountContext = createContext();

const Account = (props) => {

    const navigate = useNavigate();

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if(user) {
                user.getSession((error, session) => {
                    if (error) {
                        reject();
                    } else {
                        resolve(session);
                    }
                })
            } else {
                reject();
            }
        })
    }



  const authenticate = async (Username, Password) => {


    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      })

      const authenticationDetails = new AuthenticationDetails({
        Username,
        Password,
      })

      user.authenticateUser(authenticationDetails, {
        onSuccess: data => {
            console.log("from login " + data)
          localStorage.setItem("email", data.email);
          //navigate("/dashboard");
          resolve(data);
          
        },
        onFailure: err => {
          console.error("On Failure", err)
          reject()
        },
        newPasswordRequired: userAttr  => {
            debugger;
           user.completeNewPasswordChallenge('Admin@1234', {} , {
            onSuccess: data => {
                console.log(data);
                navigate("/dashboard");
                
            },
            onFailure: error => {
                console.error(error);
            }
           })

          //navigate("/resetpassword");
        },
      })
    })
  }

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
        user.signOut();
        navigate("/");
    }
  }

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  );
}
export { Account, AccountContext };
