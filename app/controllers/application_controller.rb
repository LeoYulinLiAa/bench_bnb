class ApplicationController < ActionController::Base


    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
      session[:session_token] = nil
      current_user&.reset_session_token!
      @current_user = nil
    end

    def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
      redirect_to root_url unless logged_in?
    end

    def logged_in?
      !!@current_user
    end

end
