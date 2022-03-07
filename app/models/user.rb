class User < ApplicationRecord
  has_one_attached :photo
  attr_reader :password
  validates :email, uniqueness: true
  validates :email, presence: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email,length: { minimum:3}
  validates :fname,length: {minimum: 1}
  validates :lname,length: {minimum: 1}
  validates :intro,length: {minimum:20,maximum:500}, allow_blank: true
  after_initialize :ensure_session_token

  has_many :listings,
  foreign_key: :host_id,
  class_name: 'Listing'

  has_many :reviews,
    foreign_key: :author_id,
    class_name: :Review

  has_many :reservations,
    foreign_key: :guest_id,
    class_name: :Reservation
    
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end
end
