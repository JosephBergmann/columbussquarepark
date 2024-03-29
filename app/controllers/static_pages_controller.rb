class StaticPagesController < ActionController::Base
    def frontend_index
      render file: Rails.root.join('public', 'index.html')
    end

    def get_all_data
        @data = {events: Event.all}
        render '/all_data'
    end
end
