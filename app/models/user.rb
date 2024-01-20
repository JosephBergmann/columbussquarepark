
class User < ApplicationRecord
    
   validates :password, length: {minimum: 6}
   
   validates :username, :email, unique: true, allow_nil: false
   

    before_validation :ensure_session_token

#    validates :email, :email_is_email?
#    def email_is_email?

#    end

    has_secure_password



    
    def reset_session_token!
        debugger
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    def ensure_session_token
        debugger
        self.session_token ||= generate_unique_session_token
    end



    private 

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end
