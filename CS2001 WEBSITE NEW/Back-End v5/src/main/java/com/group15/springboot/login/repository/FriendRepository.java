package com.group15.springboot.login.repository;

import com.group15.springboot.login.models.Friend;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendRepository extends JpaRepository<Friend, Long> {

  @Query(value = "SELECT f  FROM Friend f WHERE f.friendName like %:friendName%")
  Page<Friend> findByName(@Param("friendName") String friendName, Pageable pageable);

  @Query(value = "SELECT f  FROM Friend f WHERE f.friendName like %:friendName%")
  List<Friend> findAllByFriendName(String friendName);

  List<Friend> findByFriendIdAndUsername(Integer friendId, String username);

  List<Friend> findByUsername(String username);

}
