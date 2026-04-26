import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function usePosts(page, limit) {
  const { data, isPending, error } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => {
      return axios
        .get(`http://localhost:3001/posts?_page=${page}&_per_page=${limit}`)
        .then((res) => res.data);
    },
  });
  return { data, isPending, error };
}

export function usePost(id) {
  const { data, isPending, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => {
      return axios
        .get(`http://localhost:3001/posts/${id}`)
        .then((res) => res.data);
    },
  });
  return { data, isPending, error };
}

export function useComments(postId) {
  const { data, isPending, error } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => {
      return axios
        .get(`http://localhost:3001/comments?postId=${postId}`)
        .then((res) => res.data);
    },
  });
  return { data, isPending, error };
}

export function useAddPost(navigate) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (post) => {
      return axios.post("http://localhost:3001/posts", post).then((res) => {
        return res.data;
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });
  return { mutation };
}

export function useUpdatePost(id, navigate) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (updatedPost) => {
      return axios
        .patch(`http://localhost:3001/posts/${id}`, updatedPost)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate(`/posts/${id}`);
    },
  });
  return { mutation };
}

export function useDeletePost(navigate) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      return axios
        .delete(`http://localhost:3001/posts/${id}`)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });
  return { mutation };
}
