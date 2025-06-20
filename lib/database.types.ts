export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agendamentos: {
        Row: {
          created_at: string
          data_agendamento: string
          descricao: string | null
          id: string
          status: string | null
          titulo: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data_agendamento: string
          descricao?: string | null
          id?: string
          status?: string | null
          titulo: string
          user_id: string
        }
        Update: {
          created_at?: string
          data_agendamento?: string
          descricao?: string | null
          id?: string
          status?: string | null
          titulo?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agendamentos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      chats_forum: {
        Row: {
          conteudo: string
          created_at: string
          data_encontro: string | null
          deleted_at: string | null
          encontro_data_hora: string | null
          encontro_local: string | null
          id: string
          is_deleted: boolean | null
          local_encontro: string | null
          parent_message_id: string | null
          post_type: string | null
          tags: string[] | null
          titulo: string
          upvotes: number | null
          user_id: string
        }
        Insert: {
          conteudo: string
          created_at?: string
          data_encontro?: string | null
          deleted_at?: string | null
          encontro_data_hora?: string | null
          encontro_local?: string | null
          id?: string
          is_deleted?: boolean | null
          local_encontro?: string | null
          parent_message_id?: string | null
          post_type?: string | null
          tags?: string[] | null
          titulo: string
          upvotes?: number | null
          user_id: string
        }
        Update: {
          conteudo?: string
          created_at?: string
          data_encontro?: string | null
          deleted_at?: string | null
          encontro_data_hora?: string | null
          encontro_local?: string | null
          id?: string
          is_deleted?: boolean | null
          local_encontro?: string | null
          parent_message_id?: string | null
          post_type?: string | null
          tags?: string[] | null
          titulo?: string
          upvotes?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chats_forum_parent_message_id_fkey"
            columns: ["parent_message_id"]
            isOneToOne: false
            referencedRelation: "chats_forum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chats_forum_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      comentarios_forum: {
        Row: {
          conteudo: string
          created_at: string
          deleted_at: string | null
          id: string
          is_deleted: boolean | null
          parent_id: string | null
          post_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          conteudo: string
          created_at?: string
          deleted_at?: string | null
          id?: string
          is_deleted?: boolean | null
          parent_id?: string | null
          post_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          conteudo?: string
          created_at?: string
          deleted_at?: string | null
          id?: string
          is_deleted?: boolean | null
          parent_id?: string | null
          post_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comentarios_forum_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comentarios_forum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comentarios_forum_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments_with_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comentarios_forum_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "chats_forum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comentarios_forum_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      diarios: {
        Row: {
          data_registro: string
          id: string
          sentimento_analisado: string | null
          texto: string
          transcricao: string | null
          user_id: string
        }
        Insert: {
          data_registro?: string
          id?: string
          sentimento_analisado?: string | null
          texto: string
          transcricao?: string | null
          user_id: string
        }
        Update: {
          data_registro?: string
          id?: string
          sentimento_analisado?: string | null
          texto?: string
          transcricao?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "diarios_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      encontro_participantes: {
        Row: {
          created_at: string
          encontro_id: string
          id: string
          status: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          encontro_id: string
          id?: string
          status?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          encontro_id?: string
          id?: string
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "encontro_participantes_encontro_id_fkey"
            columns: ["encontro_id"]
            isOneToOne: false
            referencedRelation: "chats_forum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "encontro_participantes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      likes_forum: {
        Row: {
          created_at: string
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_forum_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "chats_forum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_forum_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      metas: {
        Row: {
          data_conclusao: string | null
          data_fim: string | null
          data_fim_prevista: string | null
          data_inicio: string
          descricao: string
          gemini_content: string | null
          id: string
          objetivo_numerico: number | null
          progresso: number | null
          status: string | null
          tipo_vicio: string | null
          titulo: string
          unidade: string | null
          user_id: string
        }
        Insert: {
          data_conclusao?: string | null
          data_fim?: string | null
          data_fim_prevista?: string | null
          data_inicio?: string
          descricao: string
          gemini_content?: string | null
          id?: string
          objetivo_numerico?: number | null
          progresso?: number | null
          status?: string | null
          tipo_vicio?: string | null
          titulo: string
          unidade?: string | null
          user_id: string
        }
        Update: {
          data_conclusao?: string | null
          data_fim?: string | null
          data_fim_prevista?: string | null
          data_inicio?: string
          descricao?: string
          gemini_content?: string | null
          id?: string
          objetivo_numerico?: number | null
          progresso?: number | null
          status?: string | null
          tipo_vicio?: string | null
          titulo?: string
          unidade?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "metas_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          auth_user_id: string | null
          data_cadastro: string | null
          email: string
          id: string
          nome: string
          onboarding_completed: boolean | null
        }
        Insert: {
          auth_user_id?: string | null
          data_cadastro?: string | null
          email: string
          id?: string
          nome: string
          onboarding_completed?: boolean | null
        }
        Update: {
          auth_user_id?: string | null
          data_cadastro?: string | null
          email?: string
          id?: string
          nome?: string
          onboarding_completed?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      comments_with_stats: {
        Row: {
          autor_avatar: string | null
          autor_nome: string | null
          conteudo: string | null
          created_at: string | null
          id: string | null
          parent_id: string | null
          post_id: string | null
          total_likes: number | null
          total_respostas: number | null
          updated_at: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comentarios_forum_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comentarios_forum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comentarios_forum_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments_with_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comentarios_forum_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "chats_forum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comentarios_forum_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[keyof Database]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const