package com.esprit.hotel;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class Hotel implements Serializable{
	private static final long serialVersionUID = 1L;


	@Id
	@GeneratedValue
	private int id;
	private String name, email,address,city,imgUrl;
	private int rating,zipCode,phoneNumber,roomsLeft;
	private float price;
	
	
	
	
	
	
	public Hotel(String name, String email, String address, String city, String imgUrl, int rating, int zipCode,
			int phoneNumber, int roomsLeft, float price) {
		super();
		this.name = name;
		this.email = email;
		this.address = address;
		this.city = city;
		this.imgUrl = imgUrl;
		this.rating = rating;
		this.zipCode = zipCode;
		this.phoneNumber = phoneNumber;
		this.roomsLeft = roomsLeft;
		this.price = price;
	}
	
	public Hotel() {
		super();
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public int getZipCode() {
		return zipCode;
	}
	public void setZipCode(int zipCode) {
		this.zipCode = zipCode;
	}
	public int getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public int getRoomsLeft() {
		return roomsLeft;
	}
	public void setRoomsLeft(int roomsLeft) {
		this.roomsLeft = roomsLeft;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((address == null) ? 0 : address.hashCode());
		result = prime * result + ((city == null) ? 0 : city.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + id;
		result = prime * result + ((imgUrl == null) ? 0 : imgUrl.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + phoneNumber;
		result = prime * result + Float.floatToIntBits(price);
		result = prime * result + rating;
		result = prime * result + roomsLeft;
		result = prime * result + zipCode;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Hotel other = (Hotel) obj;
		if (address == null) {
			if (other.address != null)
				return false;
		} else if (!address.equals(other.address))
			return false;
		if (city == null) {
			if (other.city != null)
				return false;
		} else if (!city.equals(other.city))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (id != other.id)
			return false;
		if (imgUrl == null) {
			if (other.imgUrl != null)
				return false;
		} else if (!imgUrl.equals(other.imgUrl))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (phoneNumber != other.phoneNumber)
			return false;
		if (Float.floatToIntBits(price) != Float.floatToIntBits(other.price))
			return false;
		if (rating != other.rating)
			return false;
		if (roomsLeft != other.roomsLeft)
			return false;
		if (zipCode != other.zipCode)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Hotel [id=" + id + ", name=" + name + ", email=" + email + ", address=" + address + ", city=" + city
				+ ", imgUrl=" + imgUrl + ", rating=" + rating + ", zipCode=" + zipCode + ", phoneNumber=" + phoneNumber
				+ ", roomsLeft=" + roomsLeft + ", price=" + price + "]";
	}
	
	
}
