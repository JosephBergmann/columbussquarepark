class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection

    rescue_from StandardError, with: :unhandled_error
    rescue_from ActionController::InvalidAuthenticityToken, with: :invalid_authenticity_token
    protect_from_forgery with: :exception

    before_action :snake_case_params
    before_action :attach_authenticity_token

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user)
        session[:session_token] = user.reset_session_token!

    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in
        if !logged_in?
            render json: {errors: ['User must be logged in']}, status: :unauthorized
        end
    end

    def require_logged_out
        if logged_in?
            render json: {errors: ['User must be logged out']}, status: :unauthorized
        end
    end
    private
    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
        # headers['X-CSRF-Token'] = form_authenticity_token
    end

    def invalid_authenticity_token
        debugger
        render json: { message: 'Invalid authenticity token' }, 
          status: :unprocessable_entity
    end
    

    def unhandled_error(error)
        if request.accepts.first.html?
          raise error
        else
          @message = "#{error.class} - #{error.message}"
          @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
          render 'api/errors/internal_server_error', status: :internal_server_error

          logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
        end
      end
end