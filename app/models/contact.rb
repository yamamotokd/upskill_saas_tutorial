class Contact < ActiveRecord::Base
    # Contact form validations
    validates :name, :email, :comments, presence: true
    validates :email, format: { with: /.+@.+\..+/i, on: :create }
    # https://davidcel.is/posts/stop-validating-email-addresses-with-regex/
    # david gives a good blog post on why not to overcomplicate the email regex.
    # its pretty sound specially for my hobby project. I can look into regex more
    # if I need to, but chances some else is better and gets paid to parse it.
end