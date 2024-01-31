
class User < ApplicationRecord
    
   validates :password, length: {minimum: 6}, allow_nil: true 

   validates :email, uniqueness: true, allow_nil: false, format: {with: URI::MailTo::EMAIL_REGEXP }
   validates :session_token, presence: true, uniqueness: true
   

    before_validation :ensure_session_token

#    validates :email, :email_is_email?
#    def email_is_email?

#    end

    has_secure_password

    has_many :images

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user&.authenticate(password)
    end


    
    # def reset_session_token!
    #     debugger
    #     self.session_token = generate_unique_session_token
    #     self.save!
    #     session_token
    #     # self.update!(session_token: generate_unique_session_token)
    #     # self.session_token
    # end

    def reset_session_token!
        debugger
        self.session_token = generate_unique_session_token
        if save
          session_token
        else
          puts errors.full_messages
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end



    private 

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end

    # def generate_unique_session_token
    #     loop do
    #       token = SecureRandom.base64
    #       break token unless User.exists?(session_token: token)
    #     end
    # end
end
